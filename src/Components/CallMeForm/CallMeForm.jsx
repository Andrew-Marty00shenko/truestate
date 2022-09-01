import axios from "axios";
import classNames from "classnames";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import "./CallMeForm.scss";

const CallMeForm = ({ setOpenCallMeForm }) => {
    const { t, i18n } = useTranslation();
    const [checkboxValue, setCheboxValue] = useState({
        russian: false,
        english: true,
        ukranian: false
    });
    const [selectedTimeZone, setSelectedTimeZone] = useState('GTM-12');
    const [selectedTimeToCall, setSelectedTimeToCall] = useState('00:00');
    const [selectedCaseOfAppeal, setSelectedCaseOfAppeal] = useState('');
    const [countryCallingCode, setCountryCallingCode] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const fetchCountryCallingCode = () => {
        axios.get('https://ipapi.co/country_calling_code/')
            .then(res => setCountryCallingCode(res.data));
    };

    const changeCheckboxValue = e => {
        if (e.target.name === 'english') {
            setCheboxValue({
                english: e.target.checked,
                russian: false,
                ukranian: false
            });
        }
        if (e.target.name === 'russian') {
            setCheboxValue({
                russian: e.target.checked,
                english: false,
                ukranian: false
            });
        }
        if (e.target.name === 'ukranian') {
            setCheboxValue({
                ukranian: e.target.checked,
                russian: false,
                english: false
            });
        }
    };

    const notify = () => {
        toast.success(t('callMeBack:THANKS_FOR_CONTACTING'), {
            className: "toast-modal",
            autoClose: 3000,
            progressClassName: 'toast-modal-progress'
        });
    };

    const onSubmit = (data) => {
        notify();
        console.log(data)
    };

    console.log(errors)

    return <form className="call-me-form"
        onSubmit={handleSubmit(onSubmit)}
    >
        {i18n.language === "EN" ? (
            <>
                <p>
                    {t('callMeBack:SHOW_I_CALL')}
                </p>
                <Form.Select className="call-me-form__select"
                    {...register("gender")}
                >
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                </Form.Select>
            </>
        ) : null}
        <div className="call-me-form__block">
            <div>
                <p
                    style={errors?.name ? { color: "#FF0000" } : null}
                >
                    {t('callMeBack:NAME')}:
                </p>
                <input
                    className={classNames({ "input-error": errors?.name })}
                    type="text"
                    placeholder={t('callMeBack:NAME')}
                    {...register("name",
                        { required: t('callMeBack:FORM_ERROR_NAME') })
                    }
                />
                {errors?.name &&
                    <p className="call-me-form__error">{errors.name.message}</p>
                }
            </div>
            <div>
                <p
                    style={
                        errors?.secondName
                            ? { color: "#FF0000" }
                            : null
                    }>
                    {t('callMeBack:SECOND_NAME')}:
                </p>
                <input
                    className={classNames({ "input-error": errors?.secondName })}
                    type="text"
                    placeholder={t('callMeBack:SECOND_NAME')}
                    {...register("secondName",
                        { required: t('callMeBack:FORM_ERROR_SECOND_NAME') })
                    }
                />
                {errors?.secondName &&
                    <p className="call-me-form__error">{errors.secondName.message}</p>}
            </div>
        </div>
        <div className="call-me-form__block">
            <div>
                <p
                    style={
                        errors?.phone
                            ? { color: "#FF0000" }
                            : null
                    }>
                    {t('callMeBack:PHONE_NUMBER')}:
                </p>
                <input
                    className={classNames({ "input-error": errors?.phone })}
                    onFocus={fetchCountryCallingCode}
                    value={countryCallingCode}
                    type="text"
                    placeholder={t('callMeBack:PHONE_NUMBER_PLACEHOLDER')}
                    {...register("phone",
                        {
                            required: true,
                            pattern: /(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/,
                            onChange: e => setCountryCallingCode(e.target.value)
                        })
                    }
                />
                {errors?.phone &&
                    <p className="call-me-form__error">
                        {errors.phone.type === 'required' && t('callMeBack:FORM_ERROR_PHONE_NUMBER')}
                    </p>
                }
            </div>
            <div>
                <p> {t('callMeBack:COMMUNICATION_OPTION')}:</p>
                <Form.Select className="call-me-form__block-select"
                    {...register("communication-option")}
                >
                    <option value="whatsApp">WhatsApp</option>
                    <option value="telegram" >Telegram</option>
                    <option value="viber">Viber</option>
                    <option value="phone">{t('callMeBack:COMMUNICATION_OPTION_PHONE')}</option>
                </Form.Select>
            </div>
        </div>
        <div className="call-me-form__block">
            <div>
                <p> {t('callMeBack:TIMEZONE')}:</p>
                <Form.Select className="call-me-form__block-select"
                    value={selectedTimeZone}
                    onChange={e => setSelectedTimeZone(e.target.value)}
                >
                    <option value="GTM-12">GTM-12</option>
                    <option value="GTM-11">GTM-11</option>
                    <option value="GTM-10">GTM-10</option>
                    <option value="GTM-9">GTM-9</option>
                    <option value="GTM-8">GTM-8</option>
                    <option value="GTM-7">GTM-7</option>
                    <option value="GTM-6">GTM-6</option>
                    <option value="GTM-5">GTM-5</option>
                    <option value="GTM-4">GTM-4</option>
                    <option value="GTM-3">GTM-3</option>
                    <option value="GTM-2">GTM-2</option>
                    <option value="GTM-1">GTM-1</option>
                    <option value="GTM+0">GTM+0</option>
                    <option value="GTM+1">GTM+1</option>
                    <option value="GTM+2">GTM+2</option>
                    <option value="GTM+3">GTM+3</option>
                    <option value="GTM+4">GTM+4</option>
                    <option value="GTM+5">GTM+5</option>
                    <option value="GTM+6">GTM+6</option>
                    <option value="GTM+7">GTM+7</option>
                    <option value="GTM+8">GTM+8</option>
                    <option value="GTM+9">GTM+9</option>
                    <option value="GTM+10">GTM+10</option>
                    <option value="GTM+11">GTM+11</option>
                    <option value="GTM+12">GTM+12</option>
                    <option value="GTM+13">GTM+13</option>
                    <option value="GTM+14">GTM+14</option>
                </Form.Select>
            </div>
            <div>
                <p> {t('callMeBack:DESIRED_CALL_TIME')}:</p>
                <Form.Select className="call-me-form__block-select"
                    value={selectedTimeToCall}
                    onChange={e => setSelectedTimeToCall(e.target.value)}
                >
                    <option value="00:00">00:00</option>
                    <option value="01:00">01:00</option>
                    <option value="02:00">02:00</option>
                    <option value="03:00">03:00</option>
                    <option value="04:00">04:00</option>
                    <option value="05:00">05:00</option>
                    <option value="06:00">06:00</option>
                    <option value="07:00">07:00</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                    <option value="23:00">23:00</option>
                </Form.Select>
            </div>
        </div>

        <p
            style={
                errors?.appeal && selectedCaseOfAppeal === ''
                    ? { color: "#FF0000", marginTop: 13 }
                    : { marginTop: 13 }
            }>
            {t('callMeBack:CASE_APPEAL')}:
        </p>
        <Form.Select
            className={classNames("call-me-form__select",
                { "call-me-form__select-error": errors?.appeal && selectedCaseOfAppeal === '' }
            )}
            {...register("appeal",
                {
                    required: true,
                    validate: selectedCaseOfAppeal !== ""
                })
            }
            value={selectedCaseOfAppeal}
            onChange={e => setSelectedCaseOfAppeal(e.target.value)}
        >
            <option value="" disabled selected> {t('callMeBack:CASE_APPEAL_PLACEHOLDER')}</option>
            <option value="investing"> {t('callMeBack:CASE_APPEAL_OPTION_1')}</option>
            <option value="smart-contract"> {t('callMeBack:CASE_APPEAL_OPTION_2')}</option>
            <option value="available-objects"> {t('callMeBack:CASE_APPEAL_OPTION_3')}</option>
            <option value="technical-points"> {t('callMeBack:CASE_APPEAL_OPTION_4')}</option>
            <option value="other"> {t('callMeBack:CASE_APPEAL_OPTION_5')}</option>
        </Form.Select>
        {errors?.appeal && selectedCaseOfAppeal === '' &&
            <p className="call-me-form__error">
                {t('callMeBack:FORM_ERROR_NAME')}
            </p>
        }

        <p
            style={
                errors?.your_message
                    ? { color: "#FF0000", marginTop: 13 }
                    : { marginTop: 13 }
            }>
            {t('callMeBack:YOUR_MESSAGE')}:
        </p>
        <textarea
            className={classNames("call-me-form__textarea",
                { "call-me-form__textarea-error": errors?.your_message }
            )}
            placeholder={t('callMeBack:YOUR_MESSAGE_PLACEHOLDER')}
            {...register("your_message",
                { required: t('callMeBack:FORM_ERROR_MESSAGE') })
            }
        />
        {errors?.your_message &&
            <p className="call-me-form__error">
                {t('callMeBack:FORM_ERROR_MESSAGE')}
            </p>
        }

        <p
            style={
                errors?.email
                    ? { color: "#FF0000" }
                    : { marginTop: 5 }
            }>
            Email*
        </p>
        <input
            className={classNames("call-me-form__input",
                { "call-me-form__input-error": errors?.email })}
            type="email"
            placeholder="Email"
            {...register("email",
                {
                    required: true,
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                })
            }
        />
        {errors?.email &&
            <p className="call-me-form__error">
                {t('callMeBack:FORM_ERROR_EMAIL')}
            </p>
        }

        <span> {t('callMeBack:NOTIFICATION')}</span>

        <p style={{ marginTop: 12 }}>
            {t('callMeBack:CONSULTATION_LANGUAGE')}:
        </p>
        <div className="call-me-form__block-checkboxes">
            <div>
                <input
                    {...register("english")}
                    checked={checkboxValue.english}
                    type="checkbox"
                    className="custom-checkbox"
                    id="English"
                    name="english"
                    value={checkboxValue.english}
                    onChange={changeCheckboxValue}
                />
                <label htmlFor="English">English</label>
            </div>
            <div>
                <input
                    {...register("russian")}
                    checked={checkboxValue.russian}
                    type="checkbox"
                    className="custom-checkbox"
                    id="Russian"
                    name="russian"
                    value={checkboxValue.russian}
                    onChange={changeCheckboxValue}
                />
                <label htmlFor="Russian">Русский</label>
            </div>
            <div>
                <input
                    {...register("ukranian")}
                    checked={checkboxValue.ukranian}
                    type="checkbox"
                    className="custom-checkbox"
                    id="Ukranian"
                    name="ukranian"
                    value={checkboxValue.ukranian}
                    onChange={changeCheckboxValue}
                />
                <label htmlFor="Ukranian">Украинский</label>
            </div>
            {/* <div>
                <input type="checkbox" class="custom-checkbox" id="Deutsch" name="happy" value="yes" />
                <label htmlFor="Deutsch">Deutsch</label>
            </div> */}
        </div>

        <Button onClick={handleSubmit}
            type="submit"
        >
            {t('callMeBack:CALL_ME_BACK_BUTTON')}
            <svg width="36" height="13" viewBox="0 0 36 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.2492 7.10782C35.5849 6.77213 35.5849 6.22787 35.2492 5.89218L29.7788 0.421787C29.4431 0.0860968 28.8989 0.0860968 28.5632 0.421787C28.2275 0.757478 28.2275 1.30174 28.5632 1.63743L33.4257 6.5L28.5632 11.3626C28.2275 11.6983 28.2275 12.2425 28.5632 12.5782C28.8989 12.9139 29.4431 12.9139 29.7788 12.5782L35.2492 7.10782ZM0.257812 7.35959H34.6414V5.64041H0.257812V7.35959Z" fill="white" />
            </svg>
        </Button>
    </form >
}

export default CallMeForm;