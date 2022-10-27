import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import classNames from "classnames";
import { useState, useEffect } from "react";

import userAPI from "../../../../API/userAPI";

import "./PasswordConfirmation.scss";

const PasswordConfirmation = () => {
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [checkingEqualPasswords, setChekingEqualPasswords] = useState(false);
    const [clickedChangePassword, setClickedChangePassword] = useState(false);
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        userAPI.restore(searchParams.get('user_id'), searchParams.get('uid'))
            .then(res => {
                setToken(res.data.access_token);
            });
    }, [searchParams]);

    const onSubmitNewPassword = data => {
        if (data.password !== data.password_confirmation) {
            setChekingEqualPasswords(true);
            return;
        } else {
            setLoading(true);
            userAPI.new_password(data, token)
                .then(res => {
                    setClickedChangePassword(true);
                    setLoading(false);
                })
                .catch(err => {
                    setLoading(false);
                });
        }
    };

    return <div className="forgot-password">
        {!clickedChangePassword ? (
            <form onSubmit={handleSubmit(onSubmitNewPassword)}>
                <h1>
                    {t('forgotPassword:FORGOT_PASSWORD_TITLE_3')}
                </h1>

                <div>
                    <p style={errors?.password && { color: "#ff0000" }}>
                        {t('forgotPassword:FORGOT_PASSWORD_NEW_PASSWORD')}:
                    </p>
                    <input
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
                        })}
                        className={classNames({ "error": errors?.password })}
                        name="password"
                        type="password"
                        placeholder={t('forgotPassword:FORGOT_PASSWORD_NEW_PASSWORD')}
                    />
                    {errors?.password?.type === 'required' && <p style={{ color: "#ff0000", marginTop: 5 }}>
                        {t('registration:REGISTRATION_ERROR')}
                    </p>}
                    {errors?.password?.type === 'pattern' && <p style={{ color: "#ff0000", marginTop: 5, fontSize: 12 }}>
                        {t('registration:REGISTRATION_ERROR_PATTERN')}
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
                    disabled={loading}
                >
                    {t('forgotPassword:FORGOT_PASSWORD_CHANGE_PASSWORD_BTN')}
                    <svg width="36" height="14" viewBox="0 0 36 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.7492 7.81339C36.0849 7.4777 36.0849 6.93344 35.7492 6.59775L30.2788 1.12735C29.9431 0.791663 29.3989 0.791663 29.0632 1.12735C28.7275 1.46304 28.7275 2.00731 29.0632 2.343L33.9257 7.20557L29.0632 12.0681C28.7275 12.4038 28.7275 12.9481 29.0632 13.2838C29.3989 13.6195 29.9431 13.6195 30.2788 13.2838L35.7492 7.81339ZM0.757812 8.06516H35.1414V6.34598H0.757812V8.06516Z" fill="white" />
                    </svg>
                </Button>
            </form>
        ) : (
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
        )}
    </div>
}

export default PasswordConfirmation;