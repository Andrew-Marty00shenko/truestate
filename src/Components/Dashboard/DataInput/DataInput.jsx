import { useState } from "react";
import classNames from "classnames";
import { Form, ButtonGroup, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux/es/exports";

import { clickNo, clickYes } from "../../../Redux/slices/checkingResidentOfUsa";

import "./DataInput.scss";

const DataInput = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const checkingResidentOfUsa = useSelector(state => state.checkingResidentOfUsa.value);
    const dispatch = useDispatch();

    const handleClickYes = () => {
        dispatch(clickYes())
    };

    const handleClickNo = () => {
        dispatch(clickNo())
    };

    const onSubmit = data => {
        console.log(data)
    }

    return <form className="data-input" onSubmit={handleSubmit(onSubmit)}>
        <div className="data-input__block">
            <div className="data-input__block-left">
                <div>
                    <p>{t('dataInput:SEX')}:</p>
                    <Form.Select className="data-input__block-select"
                        {...register("gender")}
                    >
                        <option value="male">{t('dataInput:MALE')}</option>
                        <option value="female">{t('dataInput:FEMALE')}</option>
                    </Form.Select>
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
                            type="text"
                            placeholder={t('dataInput:DATE_OF_BIRTH_PLACEHOLDER')}
                        />
                        {errors?.dateOfBirth && <p style={{ color: "#ff0000", marginTop: 5 }}>
                            {t('dataInput:INPUT_ERROR')}
                        </p>}
                    </div>
                    <div>
                        <p>{t('dataInput:COUNTRY')}:</p>
                        <Form.Select className="data-input__block-select"
                            {...register("country")}
                        >
                            <option>Мужчина</option>
                            <option>Женщина</option>
                        </Form.Select>
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

        <div className="data-input__text">
            {t('dataInput:QUESTION')}
            <ButtonGroup>
                <Button
                    className={classNames({ "active": checkingResidentOfUsa })}
                    onClick={handleClickYes}
                >
                    {t('dataInput:ANSWER_YES')}
                </Button>
                <Button
                    className={classNames({ "active": !checkingResidentOfUsa })}
                    onClick={handleClickNo}
                >
                    {t('dataInput:ANSWER_NO')}
                </Button>
            </ButtonGroup>
        </div>

        <div className="data-input__send-btn">
            <Button
                className="send-btn"
                type="submit"
                disabled={checkingResidentOfUsa}
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
    </form>
}

export default DataInput;