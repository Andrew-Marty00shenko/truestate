import { useEffect, useState } from "react";
import classNames from "classnames";
import { toast } from "react-toastify";
import { Form, ButtonGroup, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
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
    const { register, handleSubmit, formState: { errors, isDirty }, reset } = useForm();
    const navigate = useNavigate();

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
                                        : userData?.sex === 'O' || userData?.sex === 'І' || userData?.sex === 'Д'
                                            ? t('dataInput:OTHER')
                                            : t('dataInput:FEMALE')
                                }
                            </option>

                            {
                                userData?.sex === 'М' || userData?.sex === 'M' || userData?.sex === 'Ч'
                                    ? <>
                                        <option value={t('dataInput:FEMALE')}>{t('dataInput:FEMALE')}</option>
                                        <option value={t('dataInput:OTHER')}>{t('dataInput:OTHER')}</option>
                                    </>
                                    : userData?.sex === 'O' || userData?.sex === 'І' || userData?.sex === 'Д'
                                        ? <>
                                            <option value={t('dataInput:MALE')}>{t('dataInput:MALE')}</option>
                                            <option value={t('dataInput:FEMALE')}>{t('dataInput:FEMALE')}</option>
                                        </>
                                        : <>
                                            <option value={t('dataInput:MALE')}>{t('dataInput:MALE')}</option>
                                            <option value={t('dataInput:OTHER')}>{t('dataInput:OTHER')}</option>
                                        </>
                            }
                        </>
                            : <>
                                <option value="" disabled selected>{t('dataInput:CHOOSE_SEX')}</option>
                                <option value={t('dataInput:FEMALE')}>{t('dataInput:FEMALE')}</option>
                                <option value={t('dataInput:MALE')}>{t('dataInput:MALE')}</option>
                                <option value={t('dataInput:OTHER')}>{t('dataInput:OTHER')}</option>
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
                    <OverlayTrigger placement="top"
                        overlay={
                            <Tooltip>
                                {t('dataInput:INFO_NAME_SURNAME_DOB')}
                            </Tooltip>
                        }
                    >
                        <svg width="15" version="1.1" id="Capa_1" x="0px" y="0px"
                            viewBox="0 0 302.967 302.967">
                            <path d="M151.483,302.967C67.956,302.967,0,235.017,0,151.483S67.956,0,151.483,0
				s151.483,67.956,151.483,151.483S235.017,302.967,151.483,302.967z M151.483,24.416c-70.066,0-127.067,57.001-127.067,127.067
				s57.001,127.067,127.067,127.067s127.067-57.001,127.067-127.067S221.555,24.416,151.483,24.416z"/>
                            <path d="M116.586,118.12c1.795-4.607,4.297-8.588,7.511-11.961c3.225-3.389,7.114-6.016,11.667-7.898
					c4.547-1.904,9.633-2.845,15.262-2.845c7.261,0,13.32,0.995,18.183,2.997c4.857,1.996,8.768,4.482,11.738,7.441
					c2.964,2.97,5.091,6.168,6.369,9.584c1.273,3.432,1.915,6.636,1.915,9.595c0,4.901-0.642,8.947-1.915,12.118
					c-1.278,3.171-2.866,5.88-4.759,8.131c-1.898,2.252-3.987,4.172-6.293,5.755c-2.295,1.588-4.471,3.171-6.516,4.759
					c-2.045,1.583-3.862,3.394-5.445,5.439c-1.588,2.04-2.589,4.601-2.991,7.664v5.831H140.6v-6.908
					c0.305-4.395,1.153-8.072,2.529-11.036c1.382-2.964,2.991-5.499,4.83-7.598c1.844-2.089,3.786-3.911,5.836-5.445
					c2.04-1.539,3.927-3.073,5.673-4.591c1.73-1.545,3.144-3.225,4.221-5.069c1.071-1.833,1.556-4.15,1.452-6.908
					c0-4.705-1.148-8.18-3.454-10.427c-2.295-2.257-5.493-3.378-9.589-3.378c-2.758,0-5.134,0.533-7.131,1.605
					s-3.628,2.513-4.911,4.302c-1.278,1.795-2.225,3.894-2.834,6.288c-0.615,2.415-0.919,4.982-0.919,7.756h-22.55
					C113.85,127.785,114.791,122.732,116.586,118.12z M162.536,183.938v23.616h-24.09v-23.616H162.536z"/>
                        </svg>
                    </OverlayTrigger>
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
                    <OverlayTrigger placement="top"
                        overlay={
                            <Tooltip>
                                {t('dataInput:INFO_NAME_SURNAME_DOB')}
                            </Tooltip>
                        }
                    >
                        <svg width="15" version="1.1" id="Capa_1" x="0px" y="0px"
                            viewBox="0 0 302.967 302.967">
                            <path d="M151.483,302.967C67.956,302.967,0,235.017,0,151.483S67.956,0,151.483,0
				s151.483,67.956,151.483,151.483S235.017,302.967,151.483,302.967z M151.483,24.416c-70.066,0-127.067,57.001-127.067,127.067
				s57.001,127.067,127.067,127.067s127.067-57.001,127.067-127.067S221.555,24.416,151.483,24.416z"/>
                            <path d="M116.586,118.12c1.795-4.607,4.297-8.588,7.511-11.961c3.225-3.389,7.114-6.016,11.667-7.898
					c4.547-1.904,9.633-2.845,15.262-2.845c7.261,0,13.32,0.995,18.183,2.997c4.857,1.996,8.768,4.482,11.738,7.441
					c2.964,2.97,5.091,6.168,6.369,9.584c1.273,3.432,1.915,6.636,1.915,9.595c0,4.901-0.642,8.947-1.915,12.118
					c-1.278,3.171-2.866,5.88-4.759,8.131c-1.898,2.252-3.987,4.172-6.293,5.755c-2.295,1.588-4.471,3.171-6.516,4.759
					c-2.045,1.583-3.862,3.394-5.445,5.439c-1.588,2.04-2.589,4.601-2.991,7.664v5.831H140.6v-6.908
					c0.305-4.395,1.153-8.072,2.529-11.036c1.382-2.964,2.991-5.499,4.83-7.598c1.844-2.089,3.786-3.911,5.836-5.445
					c2.04-1.539,3.927-3.073,5.673-4.591c1.73-1.545,3.144-3.225,4.221-5.069c1.071-1.833,1.556-4.15,1.452-6.908
					c0-4.705-1.148-8.18-3.454-10.427c-2.295-2.257-5.493-3.378-9.589-3.378c-2.758,0-5.134,0.533-7.131,1.605
					s-3.628,2.513-4.911,4.302c-1.278,1.795-2.225,3.894-2.834,6.288c-0.615,2.415-0.919,4.982-0.919,7.756h-22.55
					C113.85,127.785,114.791,122.732,116.586,118.12z M162.536,183.938v23.616h-24.09v-23.616H162.536z"/>
                        </svg>
                    </OverlayTrigger>
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
                        <OverlayTrigger placement="top"
                            overlay={
                                <Tooltip>
                                    {t('dataInput:INFO_NAME_SURNAME_DOB')}
                                </Tooltip>
                            }
                        >
                            <svg width="15" version="1.1" id="Capa_1" x="0px" y="0px"
                                viewBox="0 0 302.967 302.967">
                                <path d="M151.483,302.967C67.956,302.967,0,235.017,0,151.483S67.956,0,151.483,0
				s151.483,67.956,151.483,151.483S235.017,302.967,151.483,302.967z M151.483,24.416c-70.066,0-127.067,57.001-127.067,127.067
				s57.001,127.067,127.067,127.067s127.067-57.001,127.067-127.067S221.555,24.416,151.483,24.416z"/>
                                <path d="M116.586,118.12c1.795-4.607,4.297-8.588,7.511-11.961c3.225-3.389,7.114-6.016,11.667-7.898
					c4.547-1.904,9.633-2.845,15.262-2.845c7.261,0,13.32,0.995,18.183,2.997c4.857,1.996,8.768,4.482,11.738,7.441
					c2.964,2.97,5.091,6.168,6.369,9.584c1.273,3.432,1.915,6.636,1.915,9.595c0,4.901-0.642,8.947-1.915,12.118
					c-1.278,3.171-2.866,5.88-4.759,8.131c-1.898,2.252-3.987,4.172-6.293,5.755c-2.295,1.588-4.471,3.171-6.516,4.759
					c-2.045,1.583-3.862,3.394-5.445,5.439c-1.588,2.04-2.589,4.601-2.991,7.664v5.831H140.6v-6.908
					c0.305-4.395,1.153-8.072,2.529-11.036c1.382-2.964,2.991-5.499,4.83-7.598c1.844-2.089,3.786-3.911,5.836-5.445
					c2.04-1.539,3.927-3.073,5.673-4.591c1.73-1.545,3.144-3.225,4.221-5.069c1.071-1.833,1.556-4.15,1.452-6.908
					c0-4.705-1.148-8.18-3.454-10.427c-2.295-2.257-5.493-3.378-9.589-3.378c-2.758,0-5.134,0.533-7.131,1.605
					s-3.628,2.513-4.911,4.302c-1.278,1.795-2.225,3.894-2.834,6.288c-0.615,2.415-0.919,4.982-0.919,7.756h-22.55
					C113.85,127.785,114.791,122.732,116.586,118.12z M162.536,183.938v23.616h-24.09v-23.616H162.536z"/>
                            </svg>
                        </OverlayTrigger>
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
                        <OverlayTrigger placement="top"
                            overlay={
                                <Tooltip>
                                    {t('dataInput:INFO_COUNTRY')}
                                </Tooltip>
                            }
                        >
                            <svg width="15" version="1.1" id="Capa_1" x="0px" y="0px"
                                viewBox="0 0 302.967 302.967">
                                <path d="M151.483,302.967C67.956,302.967,0,235.017,0,151.483S67.956,0,151.483,0
				s151.483,67.956,151.483,151.483S235.017,302.967,151.483,302.967z M151.483,24.416c-70.066,0-127.067,57.001-127.067,127.067
				s57.001,127.067,127.067,127.067s127.067-57.001,127.067-127.067S221.555,24.416,151.483,24.416z"/>
                                <path d="M116.586,118.12c1.795-4.607,4.297-8.588,7.511-11.961c3.225-3.389,7.114-6.016,11.667-7.898
					c4.547-1.904,9.633-2.845,15.262-2.845c7.261,0,13.32,0.995,18.183,2.997c4.857,1.996,8.768,4.482,11.738,7.441
					c2.964,2.97,5.091,6.168,6.369,9.584c1.273,3.432,1.915,6.636,1.915,9.595c0,4.901-0.642,8.947-1.915,12.118
					c-1.278,3.171-2.866,5.88-4.759,8.131c-1.898,2.252-3.987,4.172-6.293,5.755c-2.295,1.588-4.471,3.171-6.516,4.759
					c-2.045,1.583-3.862,3.394-5.445,5.439c-1.588,2.04-2.589,4.601-2.991,7.664v5.831H140.6v-6.908
					c0.305-4.395,1.153-8.072,2.529-11.036c1.382-2.964,2.991-5.499,4.83-7.598c1.844-2.089,3.786-3.911,5.836-5.445
					c2.04-1.539,3.927-3.073,5.673-4.591c1.73-1.545,3.144-3.225,4.221-5.069c1.071-1.833,1.556-4.15,1.452-6.908
					c0-4.705-1.148-8.18-3.454-10.427c-2.295-2.257-5.493-3.378-9.589-3.378c-2.758,0-5.134,0.533-7.131,1.605
					s-3.628,2.513-4.911,4.302c-1.278,1.795-2.225,3.894-2.834,6.288c-0.615,2.415-0.919,4.982-0.919,7.756h-22.55
					C113.85,127.785,114.791,122.732,116.586,118.12z M162.536,183.938v23.616h-24.09v-23.616H162.536z"/>
                            </svg>
                        </OverlayTrigger>
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
                    <OverlayTrigger placement="top"
                        overlay={
                            <Tooltip>
                                {t('dataInput:INFO_ADDRESS')}
                            </Tooltip>
                        }
                    >
                        <svg width="15" version="1.1" id="Capa_1" x="0px" y="0px"
                            viewBox="0 0 302.967 302.967">
                            <path d="M151.483,302.967C67.956,302.967,0,235.017,0,151.483S67.956,0,151.483,0
				s151.483,67.956,151.483,151.483S235.017,302.967,151.483,302.967z M151.483,24.416c-70.066,0-127.067,57.001-127.067,127.067
				s57.001,127.067,127.067,127.067s127.067-57.001,127.067-127.067S221.555,24.416,151.483,24.416z"/>
                            <path d="M116.586,118.12c1.795-4.607,4.297-8.588,7.511-11.961c3.225-3.389,7.114-6.016,11.667-7.898
					c4.547-1.904,9.633-2.845,15.262-2.845c7.261,0,13.32,0.995,18.183,2.997c4.857,1.996,8.768,4.482,11.738,7.441
					c2.964,2.97,5.091,6.168,6.369,9.584c1.273,3.432,1.915,6.636,1.915,9.595c0,4.901-0.642,8.947-1.915,12.118
					c-1.278,3.171-2.866,5.88-4.759,8.131c-1.898,2.252-3.987,4.172-6.293,5.755c-2.295,1.588-4.471,3.171-6.516,4.759
					c-2.045,1.583-3.862,3.394-5.445,5.439c-1.588,2.04-2.589,4.601-2.991,7.664v5.831H140.6v-6.908
					c0.305-4.395,1.153-8.072,2.529-11.036c1.382-2.964,2.991-5.499,4.83-7.598c1.844-2.089,3.786-3.911,5.836-5.445
					c2.04-1.539,3.927-3.073,5.673-4.591c1.73-1.545,3.144-3.225,4.221-5.069c1.071-1.833,1.556-4.15,1.452-6.908
					c0-4.705-1.148-8.18-3.454-10.427c-2.295-2.257-5.493-3.378-9.589-3.378c-2.758,0-5.134,0.533-7.131,1.605
					s-3.628,2.513-4.911,4.302c-1.278,1.795-2.225,3.894-2.834,6.288c-0.615,2.415-0.919,4.982-0.919,7.756h-22.55
					C113.85,127.785,114.791,122.732,116.586,118.12z M162.536,183.938v23.616h-24.09v-23.616H162.536z"/>
                        </svg>
                    </OverlayTrigger>
                    {errors?.address && <p style={{ color: "#ff0000", marginTop: 5 }}>
                        {t('dataInput:INPUT_ERROR')}
                    </p>}
                </div>
                <div className="data-input__block-right-flex">
                    <div>
                        <p style={errors?.language && { color: "#ff0000" }}>
                            {t('dataInput:LANGUAGE')}:
                        </p>
                        <Form.Select className="data-input__block-select"
                            {...register("language", {
                                required: true
                            })}
                        >
                            <option value={userData?.lang === "ru"
                                ? 'ru'
                                : userData?.lang === "en"
                                    ? 'en'
                                    : userData?.lang === "ua"
                                        ? 'ua'
                                        : null}
                                disabled
                            >
                                {userData?.lang === "ru"
                                    ? 'Русский'
                                    : userData?.lang === "en"
                                        ? 'English'
                                        : 'Український'
                                }
                            </option>
                            <option value="en">English</option>
                            <option value="ru">Русский</option>
                            <option value="ua">Український</option>
                        </Form.Select>
                        <OverlayTrigger placement="top"
                            overlay={
                                <Tooltip>
                                    {t('dataInput:INFO_LANG')}
                                </Tooltip>
                            }
                        >
                            <svg width="15" version="1.1" id="Capa_1" x="0px" y="0px"
                                viewBox="0 0 302.967 302.967">
                                <path d="M151.483,302.967C67.956,302.967,0,235.017,0,151.483S67.956,0,151.483,0
				s151.483,67.956,151.483,151.483S235.017,302.967,151.483,302.967z M151.483,24.416c-70.066,0-127.067,57.001-127.067,127.067
				s57.001,127.067,127.067,127.067s127.067-57.001,127.067-127.067S221.555,24.416,151.483,24.416z"/>
                                <path d="M116.586,118.12c1.795-4.607,4.297-8.588,7.511-11.961c3.225-3.389,7.114-6.016,11.667-7.898
					c4.547-1.904,9.633-2.845,15.262-2.845c7.261,0,13.32,0.995,18.183,2.997c4.857,1.996,8.768,4.482,11.738,7.441
					c2.964,2.97,5.091,6.168,6.369,9.584c1.273,3.432,1.915,6.636,1.915,9.595c0,4.901-0.642,8.947-1.915,12.118
					c-1.278,3.171-2.866,5.88-4.759,8.131c-1.898,2.252-3.987,4.172-6.293,5.755c-2.295,1.588-4.471,3.171-6.516,4.759
					c-2.045,1.583-3.862,3.394-5.445,5.439c-1.588,2.04-2.589,4.601-2.991,7.664v5.831H140.6v-6.908
					c0.305-4.395,1.153-8.072,2.529-11.036c1.382-2.964,2.991-5.499,4.83-7.598c1.844-2.089,3.786-3.911,5.836-5.445
					c2.04-1.539,3.927-3.073,5.673-4.591c1.73-1.545,3.144-3.225,4.221-5.069c1.071-1.833,1.556-4.15,1.452-6.908
					c0-4.705-1.148-8.18-3.454-10.427c-2.295-2.257-5.493-3.378-9.589-3.378c-2.758,0-5.134,0.533-7.131,1.605
					s-3.628,2.513-4.911,4.302c-1.278,1.795-2.225,3.894-2.834,6.288c-0.615,2.415-0.919,4.982-0.919,7.756h-22.55
					C113.85,127.785,114.791,122.732,116.586,118.12z M162.536,183.938v23.616h-24.09v-23.616H162.536z"/>
                            </svg>
                        </OverlayTrigger>
                        {errors?.language && <p style={{ color: "#ff0000", marginTop: 5 }}>
                            {t('dataInput:INPUT_ERROR')}
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
                        <OverlayTrigger placement="top"
                            overlay={
                                <Tooltip>
                                    {t('dataInput:INFO_PHONE')}
                                </Tooltip>
                            }
                        >
                            <svg width="15" version="1.1" id="Capa_1" x="0px" y="0px"
                                viewBox="0 0 302.967 302.967">
                                <path d="M151.483,302.967C67.956,302.967,0,235.017,0,151.483S67.956,0,151.483,0
				s151.483,67.956,151.483,151.483S235.017,302.967,151.483,302.967z M151.483,24.416c-70.066,0-127.067,57.001-127.067,127.067
				s57.001,127.067,127.067,127.067s127.067-57.001,127.067-127.067S221.555,24.416,151.483,24.416z"/>
                                <path d="M116.586,118.12c1.795-4.607,4.297-8.588,7.511-11.961c3.225-3.389,7.114-6.016,11.667-7.898
					c4.547-1.904,9.633-2.845,15.262-2.845c7.261,0,13.32,0.995,18.183,2.997c4.857,1.996,8.768,4.482,11.738,7.441
					c2.964,2.97,5.091,6.168,6.369,9.584c1.273,3.432,1.915,6.636,1.915,9.595c0,4.901-0.642,8.947-1.915,12.118
					c-1.278,3.171-2.866,5.88-4.759,8.131c-1.898,2.252-3.987,4.172-6.293,5.755c-2.295,1.588-4.471,3.171-6.516,4.759
					c-2.045,1.583-3.862,3.394-5.445,5.439c-1.588,2.04-2.589,4.601-2.991,7.664v5.831H140.6v-6.908
					c0.305-4.395,1.153-8.072,2.529-11.036c1.382-2.964,2.991-5.499,4.83-7.598c1.844-2.089,3.786-3.911,5.836-5.445
					c2.04-1.539,3.927-3.073,5.673-4.591c1.73-1.545,3.144-3.225,4.221-5.069c1.071-1.833,1.556-4.15,1.452-6.908
					c0-4.705-1.148-8.18-3.454-10.427c-2.295-2.257-5.493-3.378-9.589-3.378c-2.758,0-5.134,0.533-7.131,1.605
					s-3.628,2.513-4.911,4.302c-1.278,1.795-2.225,3.894-2.834,6.288c-0.615,2.415-0.919,4.982-0.919,7.756h-22.55
					C113.85,127.785,114.791,122.732,116.586,118.12z M162.536,183.938v23.616h-24.09v-23.616H162.536z"/>
                            </svg>
                        </OverlayTrigger>
                        {errors?.phone && <p style={{ color: "#ff0000", marginTop: 5 }}>
                            {t('dataInput:ERROR_PHONE_NUMBER')}
                        </p>}
                    </div>
                </div>
            </div>
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
                disabled={checkingResidentOfUsa || loading || !isDirty}
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