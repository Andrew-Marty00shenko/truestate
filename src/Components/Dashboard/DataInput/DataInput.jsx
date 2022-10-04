import { useEffect, useState } from "react";
import classNames from "classnames";
import { toast } from "react-toastify";
import { Form, ButtonGroup, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux/es/exports";
import countries from "i18n-iso-countries";

import { clickNo, clickYes } from "../../../Redux/slices/checkingResidentOfUsa";
import userDataAPI from "../../../API/userDataAPI";

import "./DataInput.scss";

countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
countries.registerLocale(require('i18n-iso-countries/langs/ru.json'));
countries.registerLocale(require('i18n-iso-countries/langs/uk.json'));

const DataInput = () => {
    const { t, i18n } = useTranslation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    console.log(errors)

    const [activeCountries, setActiveCountries] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    const checkingResidentOfUsa = useSelector(state => state.checkingResidentOfUsa.value);
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        setActiveCountries(countries.getNames(i18n.language === 'UA' ?
            'uk' :
            i18n.language.toLocaleLowerCase())
        );
    }, [t]);

    useEffect(() => {
        userDataAPI.getUserProfile()
            .then(({ data }) => {
                reset({
                    gender: data.sex,
                    secondName: data.lastname,
                    name: data.firstname,
                    dateOfBirth: data.birthday,
                    country: data.citizenship,
                    address: data.address,
                    email: data.email,
                    phone: data.phone,
                    language: data.lang
                });
                setUserData(data);
            })
    }, []);

    useEffect(() => {
        if (!isAuth) {
            navigate('/dashboard/login');
        }
    }, []);

    const handleClickYes = () => {
        dispatch(clickYes())
    };

    const handleClickNo = () => {
        dispatch(clickNo())
    };

    const onSubmit = data => {
        setLoading(true);
        userDataAPI.saveUserProfile({
            firstname: data.name,
            lastname: data.secondName,
            sex: data.gender,
            birthday: data.dateOfBirth,
            address: data.address,
            phone: data.phone,
            citizenship: data.country,
            is_usa: checkingResidentOfUsa,
            lang: data.language,
        }).then(({ data }) => {
            setLoading(false);
            if (data.succes) {
                toast.success(t('dataInput:USER_PROFILE_UPDATED'))
            }
        }).catch(err => toast.error(err));
    };

    return <form className="data-input" onSubmit={handleSubmit(onSubmit)}>
        <div className="data-input__block">
            <div className="data-input__block-left">
                <div>
                    <p style={errors?.gender && { color: "#ff0000" }}>
                        {t('dataInput:SEX')}:
                    </p>
                    <Form.Select
                        className={classNames("data-input__block-select",
                            { "error": errors?.gender })
                        }
                        {...register("gender", {
                            required: true,
                            validate: v => v !== ''
                        })}
                    >
                        {userData?.sex !== null ? <>
                            <option value={userData?.sex}>
                                {
                                    userData?.sex === 'М' || userData?.sex === 'M' || userData?.sex === 'Ч'
                                        ? t('dataInput:MALE')
                                        : t('dataInput:FEMALE')
                                }
                            </option>

                            {
                                userData?.sex === 'М' || userData?.sex === 'M' || userData?.sex === 'Ч'
                                    ? <option value={t('dataInput:FEMALE')}>{t('dataInput:FEMALE')}</option>
                                    : <option value={t('dataInput:MALE')}>{t('dataInput:MALE')}</option>
                            }
                        </>
                            : <>
                                <option value="" disabled selected>{t('dataInput:CHOOSE_SEX')}</option>
                                <option value={t('dataInput:FEMALE')}>{t('dataInput:FEMALE')}</option>
                                <option value={t('dataInput:MALE')}>{t('dataInput:MALE')}</option>
                            </>
                        }
                    </Form.Select>
                    {errors?.gender && <p style={{ color: "#ff0000", marginTop: 5 }}>
                        {t('dataInput:INPUT_ERROR')}
                    </p>}
                </div>
                <div>
                    <p style={errors?.secondName && { color: "#ff0000" }}>
                        {t('dataInput:SECOND_NAME')}:
                    </p>
                    <input
                        className={classNames({ "error": errors?.secondName })}
                        {...register("secondName", { required: true })}
                        type="text"
                        placeholder={t('dataInput:SECOND_NAME')}
                    />
                    {errors?.secondName && <p style={{ color: "#ff0000", marginTop: 5 }}>
                        {t('dataInput:INPUT_ERROR')}
                    </p>}
                </div>
                <div>
                    <p style={errors?.name && { color: "#ff0000" }}>
                        {t('dataInput:NAME')}:
                    </p>
                    <input
                        className={classNames({ "error": errors?.name })}
                        {...register("name", { required: true })}
                        type="text"
                        placeholder={t('dataInput:NAME')}
                    />
                    {errors?.name && <p style={{ color: "#ff0000", marginTop: 5 }}>
                        {t('dataInput:INPUT_ERROR')}
                    </p>}
                </div>
            </div>
            <div className="data-input__block-right">
                <div className="data-input__block-right-flex">
                    <div>
                        <p style={errors?.dateOfBirth && { color: "#ff0000" }}>
                            {t('dataInput:DATE_OF_BIRTH')}:
                        </p>
                        <input
                            className={classNames({ "error": errors?.dateOfBirth })}
                            {...register("dateOfBirth", { required: true })}
                            type="date"
                            placeholder={t('dataInput:DATE_OF_BIRTH_PLACEHOLDER')}
                        />
                        {errors?.dateOfBirth && <p style={{ color: "#ff0000", marginTop: 5 }}>
                            {t('dataInput:INPUT_ERROR')}
                        </p>}
                    </div>
                    <div>
                        <p style={errors?.country && { color: "#ff0000" }}>
                            {t('dataInput:COUNTRY')}:
                        </p>
                        <Form.Select
                            className={classNames("data-input__block-select",
                                { "error": errors?.country })
                            }
                            {...register("country", {
                                required: true,
                                validate: v => v !== ''
                            })}
                        >
                            <option value="" disabled selected>{t('dataInput:CHOOSE_COUNTRY')}</option>
                            <option value={userData?.citizenship}>{userData?.citizenship}</option>
                            {activeCountries && Object.keys(activeCountries).map(countryId => {
                                return <option
                                    key={countryId}
                                    value={activeCountries[countryId]}
                                >
                                    {activeCountries[countryId]}
                                </option>
                            })}
                        </Form.Select>
                        {errors?.country && <p style={{ color: "#ff0000", marginTop: 5 }}>
                            {t('dataInput:INPUT_ERROR')}
                        </p>}
                    </div>
                </div>
                <div>
                    <p style={errors?.address && { color: "#ff0000" }}>
                        {t('dataInput:ADDRESS')}:
                    </p>
                    <input
                        className={classNames({ "error": errors?.address })}
                        {...register("address", { required: true })}
                        type="text"
                        placeholder={t('dataInput:ADDRESS_PLACEHOLDER')}
                    />
                    {errors?.address && <p style={{ color: "#ff0000", marginTop: 5 }}>
                        {t('dataInput:INPUT_ERROR')}
                    </p>}
                </div>
                <div className="data-input__block-right-flex">
                    <div>
                        <p style={errors?.email && { color: "#ff0000" }}>
                            {t('dataInput:EMAIL')}:
                        </p>
                        <input
                            {...register("email",
                                {
                                    required: true,
                                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                                })
                            }
                            className={classNames({ "error": errors?.email })}
                            name="email"
                            type="email"
                            placeholder={t('dataInput:EMAIL')}
                        />
                        {errors?.email && <p style={{ color: "#ff0000", marginTop: 5 }}>
                            {t('registration:REGISTRATION_ERROR')}
                        </p>}
                    </div>
                    <div>
                        <p style={errors?.phone && { color: "#ff0000" }}>
                            {t('dataInput:PHONE_NUMBER')}:
                        </p>
                        <input
                            className={classNames({ "error": errors?.phone })}
                            type="text"
                            placeholder={t('dataInput:PHONE_NUMBER_PLACEHOLDER')}
                            {...register("phone",
                                {
                                    required: true,
                                    pattern: /(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/
                                })
                            }
                        />
                        {errors?.phone && <p style={{ color: "#ff0000", marginTop: 5 }}>
                            {t('dataInput:ERROR_PHONE_NUMBER')}
                        </p>}
                    </div>
                </div>
            </div>
        </div>

        <div className="data-input__language">
            <p style={errors?.language && { color: "#ff0000" }}>
                {t('dataInput:LANGUAGE')}:
            </p>
            <Form.Select className="data-input__block-select"
                {...register("language", {
                    required: true
                })}
            >
                <option value={userData?.language === "ru"
                    ? 'ru'
                    : userData?.language === "en"
                        ? 'en'
                        : userData?.language === "ua"
                            ? 'ua'
                            : null}
                    disabled
                >
                    {userData?.language === "ru"
                        ? 'Русский'
                        : userData?.language === "en"
                            ? 'English'
                            : 'Український'
                    }
                </option>
                <option value="en">English</option>
                <option value="ru">Русский</option>
                <option value="ua">Український</option>
            </Form.Select>
            {errors?.language && <p style={{ color: "#ff0000", marginTop: 5 }}>
                {t('dataInput:INPUT_ERROR')}
            </p>}
        </div>

        <div className="data-input__text">
            {t('dataInput:QUESTION')}
            <ButtonGroup>
                <Button
                    className={classNames({ "active": checkingResidentOfUsa })}
                    onClick={handleClickYes}
                >
                    {t('dataInput:ANSWER_YES')}
                    {checkingResidentOfUsa && <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 13.2937L9.14074 18.4344L21.0848 3.79091" stroke="#fff" strokeWidth="1.5">
                        </path>
                    </svg>}
                </Button>
                <Button
                    className={classNames({ "active": !checkingResidentOfUsa })}
                    onClick={handleClickNo}
                >
                    {t('dataInput:ANSWER_NO')}
                    {!checkingResidentOfUsa && <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 13.2937L9.14074 18.4344L21.0848 3.79091" stroke="#fff" strokeWidth="1.5">
                        </path>
                    </svg>}
                </Button>
            </ButtonGroup>
        </div>

        <div className="data-input__send-btn">
            <Button
                className="send-btn"
                type="submit"
                disabled={checkingResidentOfUsa || loading}
            >
                {t('dataInput:SEND_BTN')}
                <svg width="36" height="13" viewBox="0 0 36 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.2492 7.10782C35.5849 6.77213 35.5849 6.22787 35.2492 5.89218L29.7788 0.421787C29.4431 0.0860968 28.8989 0.0860968 28.5632 0.421787C28.2275 0.757478 28.2275 1.30174 28.5632 1.63743L33.4257 6.5L28.5632 11.3626C28.2275 11.6983 28.2275 12.2425 28.5632 12.5782C28.8989 12.9139 29.4431 12.9139 29.7788 12.5782L35.2492 7.10782ZM0.257812 7.35959H34.6414V5.64041H0.257812V7.35959Z" fill="white" />
                </svg>
            </Button>

            {checkingResidentOfUsa ? <p>
                {t('dataInput:RESIDENT_OF_USA_ERROR')}
            </p> : ""}
        </div>
    </form >
}

export default DataInput;