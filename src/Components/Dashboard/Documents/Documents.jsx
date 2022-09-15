import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Documents.scss";

const Documents = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const allFields = watch();
    const [passportValue, setPassportValue] = useState('');
    const [idValue, setIdValue] = useState('');
    const [addressValue, setAddressValue] = useState('');
    const isAuth = useSelector(state => state.user.isAuth);

    useEffect(() => {
        if (!isAuth) {
            navigate('/dashboard/login')
        }
    }, []);

    useEffect(() => {
        if (allFields) {
            setPassportValue(allFields.passport);
            setAddressValue(allFields.address);
        }
    }, [allFields]);

    const onSubmit = data => {
        console.log(data)
    };

    return <form className="documents"
        onSubmit={handleSubmit(onSubmit)}
    >
        <div className="documents-width">
            <div className="documents__block">
                <div className={classNames("documents__block-file", {
                    "error": errors?.passport
                })} >
                    <label htmlFor="passport">
                        <input
                            {...register("passport", { validate: value => value.length !== 0 })}
                            type="file"
                            id="passport"
                        />
                        <svg width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.82669 8.93828C5.8256 7.20813 6.80585 5.46653 7.8284 3.75069C9.12038 1.582 11.0528 0.557362 13.5788 0.725936C16.2655 0.905061 18.5873 3.12795 18.9472 5.79321C19.1363 7.19619 18.8745 8.50401 18.1735 9.72279C16.3732 12.8526 14.5706 15.9805 12.7573 19.1028C11.5716 21.145 9.16794 21.8193 7.10369 20.7072C5.12314 19.64 4.39759 17.0808 5.54792 15.0446C7.03291 12.4161 8.56057 9.81155 10.0718 7.19752C10.1157 7.12139 10.1724 7.04732 10.2387 6.99006C10.4076 6.84272 10.596 6.83409 10.782 6.95872C10.9695 7.08421 11.0271 7.26542 10.9538 7.47523C10.9157 7.58391 10.8507 7.68375 10.7927 7.78426C9.3283 10.3218 7.86121 12.8571 6.3998 15.3964C5.56837 16.8411 5.82592 18.4826 7.03749 19.5437C8.41769 20.7526 10.5919 20.5217 11.6877 19.0485C11.7892 18.912 11.8867 18.7719 11.9717 18.6246C13.7693 15.5145 15.5807 12.4116 17.3559 9.28855C18.4214 7.41436 18.3685 5.53807 17.1473 3.7383C15.453 1.24144 11.6976 0.881154 9.55913 3.01098C9.20133 3.36702 8.87816 3.77823 8.62422 4.21347C6.65216 7.59577 4.69685 10.9871 2.74524 14.3812C1.20633 17.0582 1.53046 20.2137 3.56707 22.524C5.58938 24.8188 9.1763 25.4527 11.8654 24.0064C13.0829 23.3519 14.0221 22.4265 14.7094 21.2336C16.3246 18.4315 17.9432 15.6314 19.5601 12.8309C19.8049 12.4069 20.036 12.2922 20.3135 12.4564C20.5875 12.6186 20.598 12.8675 20.3486 13.2994C18.7404 16.085 17.1314 18.8694 15.5247 21.6559C14.3001 23.7792 12.4961 25.1156 10.0816 25.5693C8.09563 25.9427 6.21825 25.58 4.51473 24.489C2.36236 23.1103 1.15912 21.1205 0.901005 18.583C0.731973 16.9183 1.11663 15.3643 1.95042 13.919C2.90911 12.2585 3.86751 10.5985 4.82669 8.93828Z" fill="black" stroke="black" strokeWidth="0.744038" />
                        </svg>
                        <span>
                            {passportValue?.length === 0 && t('documents:Passport')}
                            {passportValue?.length > 0 && passportValue[0].name}
                        </span>
                    </label>
                    <div>
                        {errors?.passport && <p style={{ color: "#ff0000", marginTop: 18 }}>
                            {t('dataInput:INPUT_ERROR')}
                        </p>}
                    </div>
                </div>
                <div>
                    <Form.Select
                        {...register("country", {
                            validate: value => value !== ''
                        })}
                        className={classNames("documents__block-select", { "error": errors?.country })}
                    >
                        <option value="" disabled selected>{t('documents:CHOOSE_COUNTRY')}</option>
                        <option value="asdsad">{t('documents:CHOOSE_COUNTRY')}</option>
                    </Form.Select>
                    {errors?.country && <p style={{ color: "#ff0000", marginTop: 5 }}>
                        {t('dataInput:INPUT_ERROR')}
                    </p>}
                </div>
            </div>
            <div className="documents__block">
                <div className="documents__block-file">
                    <label htmlFor="id">
                        <input type="file"
                            id="id"
                        />
                        <svg width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.82669 8.93828C5.8256 7.20813 6.80585 5.46653 7.8284 3.75069C9.12038 1.582 11.0528 0.557362 13.5788 0.725936C16.2655 0.905061 18.5873 3.12795 18.9472 5.79321C19.1363 7.19619 18.8745 8.50401 18.1735 9.72279C16.3732 12.8526 14.5706 15.9805 12.7573 19.1028C11.5716 21.145 9.16794 21.8193 7.10369 20.7072C5.12314 19.64 4.39759 17.0808 5.54792 15.0446C7.03291 12.4161 8.56057 9.81155 10.0718 7.19752C10.1157 7.12139 10.1724 7.04732 10.2387 6.99006C10.4076 6.84272 10.596 6.83409 10.782 6.95872C10.9695 7.08421 11.0271 7.26542 10.9538 7.47523C10.9157 7.58391 10.8507 7.68375 10.7927 7.78426C9.3283 10.3218 7.86121 12.8571 6.3998 15.3964C5.56837 16.8411 5.82592 18.4826 7.03749 19.5437C8.41769 20.7526 10.5919 20.5217 11.6877 19.0485C11.7892 18.912 11.8867 18.7719 11.9717 18.6246C13.7693 15.5145 15.5807 12.4116 17.3559 9.28855C18.4214 7.41436 18.3685 5.53807 17.1473 3.7383C15.453 1.24144 11.6976 0.881154 9.55913 3.01098C9.20133 3.36702 8.87816 3.77823 8.62422 4.21347C6.65216 7.59577 4.69685 10.9871 2.74524 14.3812C1.20633 17.0582 1.53046 20.2137 3.56707 22.524C5.58938 24.8188 9.1763 25.4527 11.8654 24.0064C13.0829 23.3519 14.0221 22.4265 14.7094 21.2336C16.3246 18.4315 17.9432 15.6314 19.5601 12.8309C19.8049 12.4069 20.036 12.2922 20.3135 12.4564C20.5875 12.6186 20.598 12.8675 20.3486 13.2994C18.7404 16.085 17.1314 18.8694 15.5247 21.6559C14.3001 23.7792 12.4961 25.1156 10.0816 25.5693C8.09563 25.9427 6.21825 25.58 4.51473 24.489C2.36236 23.1103 1.15912 21.1205 0.901005 18.583C0.731973 16.9183 1.11663 15.3643 1.95042 13.919C2.90911 12.2585 3.86751 10.5985 4.82669 8.93828Z" fill="black" stroke="black" strokeWidth="0.744038" />
                        </svg>
                        <span>
                            {idValue === '' ? t('documents:ID') : idValue.name}
                        </span>
                    </label>
                </div>
                <div>
                    <Form.Select  {...register("idCard", {
                        validate: value => value !== ''
                    })}
                        className={classNames("documents__block-select", { "error": errors?.idCard })}
                    >
                        <option value="" disabled selected>{t('documents:CHOOSE_COUNTRY')}</option>
                    </Form.Select>
                    {errors?.idCard && <p style={{ color: "#ff0000", marginTop: 5 }}>
                        {t('dataInput:INPUT_ERROR')}
                    </p>}
                </div>
            </div>
            <div className="documents__block">
                <div className={classNames("documents__block-file", {
                    "error": errors?.address
                })} >
                    <label htmlFor="address">
                        <input
                            {...register("address", { validate: value => value.length !== 0 })}
                            type="file"
                            id="address"
                        />
                        <svg width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.82669 8.93828C5.8256 7.20813 6.80585 5.46653 7.8284 3.75069C9.12038 1.582 11.0528 0.557362 13.5788 0.725936C16.2655 0.905061 18.5873 3.12795 18.9472 5.79321C19.1363 7.19619 18.8745 8.50401 18.1735 9.72279C16.3732 12.8526 14.5706 15.9805 12.7573 19.1028C11.5716 21.145 9.16794 21.8193 7.10369 20.7072C5.12314 19.64 4.39759 17.0808 5.54792 15.0446C7.03291 12.4161 8.56057 9.81155 10.0718 7.19752C10.1157 7.12139 10.1724 7.04732 10.2387 6.99006C10.4076 6.84272 10.596 6.83409 10.782 6.95872C10.9695 7.08421 11.0271 7.26542 10.9538 7.47523C10.9157 7.58391 10.8507 7.68375 10.7927 7.78426C9.3283 10.3218 7.86121 12.8571 6.3998 15.3964C5.56837 16.8411 5.82592 18.4826 7.03749 19.5437C8.41769 20.7526 10.5919 20.5217 11.6877 19.0485C11.7892 18.912 11.8867 18.7719 11.9717 18.6246C13.7693 15.5145 15.5807 12.4116 17.3559 9.28855C18.4214 7.41436 18.3685 5.53807 17.1473 3.7383C15.453 1.24144 11.6976 0.881154 9.55913 3.01098C9.20133 3.36702 8.87816 3.77823 8.62422 4.21347C6.65216 7.59577 4.69685 10.9871 2.74524 14.3812C1.20633 17.0582 1.53046 20.2137 3.56707 22.524C5.58938 24.8188 9.1763 25.4527 11.8654 24.0064C13.0829 23.3519 14.0221 22.4265 14.7094 21.2336C16.3246 18.4315 17.9432 15.6314 19.5601 12.8309C19.8049 12.4069 20.036 12.2922 20.3135 12.4564C20.5875 12.6186 20.598 12.8675 20.3486 13.2994C18.7404 16.085 17.1314 18.8694 15.5247 21.6559C14.3001 23.7792 12.4961 25.1156 10.0816 25.5693C8.09563 25.9427 6.21825 25.58 4.51473 24.489C2.36236 23.1103 1.15912 21.1205 0.901005 18.583C0.731973 16.9183 1.11663 15.3643 1.95042 13.919C2.90911 12.2585 3.86751 10.5985 4.82669 8.93828Z" fill="black" stroke="black" strokeWidth="0.744038" />
                        </svg>
                        <span style={i18n.language === "UA" ? {
                            fontSize: 15
                        } : null}>
                            {addressValue?.length === 0 && t('documents:PROOF_OF_ADDRESS')}
                            {addressValue?.length > 0 && addressValue[0].name}
                        </span>
                    </label>
                    <div>
                        {errors?.address && <p style={{ color: "#ff0000", marginTop: 18 }}>
                            {t('dataInput:INPUT_ERROR')}
                        </p>}
                    </div>
                </div>
                <div>
                    <Form.Select  {...register("bankStatement", {
                        validate: value => value !== ''
                    })}
                        className={classNames("documents__block-select", { "error": errors?.bankStatement })}
                    >
                        <option value="" disabled selected>{t('documents:BANK_STATEMENT')}</option>
                    </Form.Select>
                    {errors?.bankStatement && <p style={{ color: "#ff0000", marginTop: 5 }}>
                        {t('dataInput:INPUT_ERROR')}
                    </p>}
                </div>
            </div>
            <Button type="submit">
                {t('documents:SEND')}
                <svg width="36" height="14" viewBox="0 0 36 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.2492 7.60782C35.5849 7.27213 35.5849 6.72787 35.2492 6.39218L29.7788 0.921787C29.4431 0.586097 28.8989 0.586097 28.5632 0.921787C28.2275 1.25748 28.2275 1.80174 28.5632 2.13743L33.4257 7L28.5632 11.8626C28.2275 12.1983 28.2275 12.7425 28.5632 13.0782C28.8989 13.4139 29.4431 13.4139 29.7788 13.0782L35.2492 7.60782ZM0.257812 7.85959H34.6414V6.14041H0.257812V7.85959Z" fill="white" />
                </svg>
            </Button>
        </div>
        <hr />
        <div className="documents__status-block">
            <p>
                {t('documents:STATUS')}: {" "}
                <span>
                    {t('documents:RECIEVED')}
                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.25" y="7.75" width="12.5" height="12.5" stroke="black" strokeWidth="0.5" />
                        <path d="M2 11.9908L6.44356 16.4344L16.7677 3.77681" stroke="black" />
                    </svg>
                </span>
            </p>
            <p>
                {/* Здесь написано почему отклонена заявка.Также рекомендации по дальнейшим действиям. */}
            </p>
        </div>
    </form>
}

export default Documents;