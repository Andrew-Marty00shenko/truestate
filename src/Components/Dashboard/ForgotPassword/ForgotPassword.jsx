import classNames from "classnames";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "./ForgotPassword.scss";

const ForgotPassword = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [email, setEmail] = useState('')
    const [clickedNextBtn, setClickedNextBtn] = useState(false);
    const [clickedSubmitKeyBtn, setClickedSubmitKeyBtn] = useState(false);
    const [clickedChangePassword, setClickedChangePassword] = useState(false);
    const [checkingEqualPasswords, setChekingEqualPasswords] = useState(false);
    const err = true

    // const handleSubmitEmail = e => {
    //     if (email) {
    //         setClickedNextBtn(true);
    //     } else {
    //         toast.error(t('forgotPassword:FORGOT_PASSWORD_NOTIFICATION'), {
    //             className: "toast-modal",
    //             autoClose: 3000,
    //             progressClassName: 'toast-modal-progress'
    //         });
    //     }
    // };

    const onSubmitEmail = data => {
        if (err) {
            toast.error(t('forgotPassword:FORGOT_PASSWORD_NOT_FOUND_EMAIL'));

            return;
        }
        setClickedNextBtn(true);
        setEmail(data.email);
    };

    const onSubmitCode = data => {
        setClickedSubmitKeyBtn(true);
        setEmail(data.code)
    }

    const onSubmitNewPassword = data => {
        if (data.password !== data.password_confirmation) {
            setChekingEqualPasswords(true);
            return;
        } else {
            setClickedChangePassword(true);
            setClickedSubmitKeyBtn(false);
            setClickedNextBtn(false);
        }
    }

    return <div className="forgot-password">
        {!clickedNextBtn && !clickedSubmitKeyBtn && !clickedChangePassword ? (
            <form onSubmit={handleSubmit(onSubmitEmail)}>
                <h1>
                    {t('forgotPassword:FORGOT_PASSWORD_TITLE_1')}
                </h1>

                <h2>
                    {t('forgotPassword:FORGOT_PASSWORD_TEXT')}
                </h2>

                <div>
                    <p style={errors?.email && { color: "#ff0000" }}>
                        {t('forgotPassword:FORGOT_PASSWORD_EMAIL')}:
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
                        placeholder={t('forgotPassword:FORGOT_PASSWORD_EMAIL')}
                    />
                    {errors?.email && <p style={{ color: "#ff0000", marginTop: 5 }}>
                        {t('forgotPassword:FORGOT_PASSWORD_ERROR')}
                    </p>}
                </div>
                <Button
                    type="submit"
                    className="btn-first"
                >
                    {t('forgotPassword:FORGOT_PASSWORD_NEXT_BUTTON')}
                    <svg width="36" height="14" viewBox="0 0 36 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.7492 7.81339C36.0849 7.4777 36.0849 6.93344 35.7492 6.59775L30.2788 1.12735C29.9431 0.791663 29.3989 0.791663 29.0632 1.12735C28.7275 1.46304 28.7275 2.00731 29.0632 2.343L33.9257 7.20557L29.0632 12.0681C28.7275 12.4038 28.7275 12.9481 29.0632 13.2838C29.3989 13.6195 29.9431 13.6195 30.2788 13.2838L35.7492 7.81339ZM0.757812 8.06516H35.1414V6.34598H0.757812V8.06516Z" fill="white" />
                    </svg>
                </Button>
            </form>
        ) : clickedNextBtn && !clickedSubmitKeyBtn && !clickedChangePassword ? (
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                onSubmit={handleSubmit(onSubmitCode)}
            >
                <h1>
                    {t('forgotPassword:FORGOT_PASSWORD_TITLE_2')} <span>{email}</span>
                </h1>

                <div>
                    <p style={errors?.code && { color: "#ff0000" }}>
                        {t('forgotPassword:FORGOT_PASSWORD_INPUT_CODE')}:
                    </p>
                    <input
                        {...register("code", { required: true })}
                        className={classNames({ "error": errors?.code })}
                        name="code"
                        type="text"
                        placeholder={t('forgotPassword:FORGOT_PASSWORD_INPUT_CODE')}
                    />
                    {errors?.code && <p style={{ color: "#ff0000", marginTop: 5 }}>
                        {t('forgotPassword:FORGOT_PASSWORD_ERROR')}
                    </p>}
                </div>

                <Button
                    className="btn-second"
                    type="submit"
                >
                    {t('forgotPassword:FORGOT_PASSWORD_SEND_BTN')}
                    <svg width="36" height="14" viewBox="0 0 36 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.7492 7.81339C36.0849 7.4777 36.0849 6.93344 35.7492 6.59775L30.2788 1.12735C29.9431 0.791663 29.3989 0.791663 29.0632 1.12735C28.7275 1.46304 28.7275 2.00731 29.0632 2.343L33.9257 7.20557L29.0632 12.0681C28.7275 12.4038 28.7275 12.9481 29.0632 13.2838C29.3989 13.6195 29.9431 13.6195 30.2788 13.2838L35.7492 7.81339ZM0.757812 8.06516H35.1414V6.34598H0.757812V8.06516Z" fill="white" />
                    </svg>
                </Button>
            </form>
        ) : clickedSubmitKeyBtn ? (
            <form onSubmit={handleSubmit(onSubmitNewPassword)}>
                <h1>
                    {t('forgotPassword:FORGOT_PASSWORD_TITLE_3')}
                </h1>

                <div>
                    <p style={errors?.password && { color: "#ff0000" }}>
                        {t('forgotPassword:FORGOT_PASSWORD_NEW_PASSWORD')}:
                    </p>
                    <input
                        {...register("password", { required: true })}
                        className={classNames({ "error": errors?.password })}
                        name="password"
                        type="password"
                        placeholder={t('forgotPassword:FORGOT_PASSWORD_NEW_PASSWORD')}
                    />
                    {errors?.password && <p style={{ color: "#ff0000", marginTop: 5 }}>
                        {t('forgotPassword:FORGOT_PASSWORD_ERROR')}
                    </p>}
                </div>

                <div style={{
                    marginTop: 24
                }}>
                    <p style={errors?.password_confirmation && { color: "#ff0000" }}>
                        {t('forgotPassword:FORGOT_PASSWORD_NEW_PASSWORD_REPEAT')}:
                    </p>
                    <input
                        {...register("password_confirmation", { required: true })}
                        className={classNames({ "error": errors?.password_confirmation })}
                        name="password_confirmation"
                        type="password"
                        placeholder={t('forgotPassword:FORGOT_PASSWORD_NEW_PASSWORD_REPEAT')}
                    />
                    {errors?.password_confirmation && <p style={{ color: "#ff0000", marginTop: 5 }}>
                        {t('forgotPassword:FORGOT_PASSWORD_ERROR')}
                    </p>}
                </div>

                {checkingEqualPasswords && <p style={{ color: "#ff0000", marginTop: 5 }}>
                    {t('forgotPassword:FORGOT_PASSWORD_CHECKING_PASSWORDS')}
                </p>}

                <Button className="btn-third"
                    type="submit"
                >
                    {t('forgotPassword:FORGOT_PASSWORD_CHANGE_PASSWORD_BTN')}
                    <svg width="36" height="14" viewBox="0 0 36 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.7492 7.81339C36.0849 7.4777 36.0849 6.93344 35.7492 6.59775L30.2788 1.12735C29.9431 0.791663 29.3989 0.791663 29.0632 1.12735C28.7275 1.46304 28.7275 2.00731 29.0632 2.343L33.9257 7.20557L29.0632 12.0681C28.7275 12.4038 28.7275 12.9481 29.0632 13.2838C29.3989 13.6195 29.9431 13.6195 30.2788 13.2838L35.7492 7.81339ZM0.757812 8.06516H35.1414V6.34598H0.757812V8.06516Z" fill="white" />
                    </svg>
                </Button>
            </form>
        ) : clickedChangePassword && !clickedSubmitKeyBtn && !clickedNextBtn ? (
            <>
                <h1 className="fourth">
                    {t('forgotPassword:FORGOT_PASSWORD_TITLE_4')}
                </h1>
                <Link to='/dashboard/login'>
                    <Button className="btn-fourth"

                    >
                        {t('forgotPassword:FORGOT_PASSWORD_TO_DASHBOARD_BTN')}
                        <svg width="36" height="14" viewBox="0 0 36 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.7492 7.81339C36.0849 7.4777 36.0849 6.93344 35.7492 6.59775L30.2788 1.12735C29.9431 0.791663 29.3989 0.791663 29.0632 1.12735C28.7275 1.46304 28.7275 2.00731 29.0632 2.343L33.9257 7.20557L29.0632 12.0681C28.7275 12.4038 28.7275 12.9481 29.0632 13.2838C29.3989 13.6195 29.9431 13.6195 30.2788 13.2838L35.7492 7.81339ZM0.757812 8.06516H35.1414V6.34598H0.757812V8.06516Z" fill="white" />
                        </svg>
                    </Button>
                </Link>
            </>
        ) : null}


    </div>
}

export default ForgotPassword;