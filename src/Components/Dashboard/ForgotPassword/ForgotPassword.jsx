import classNames from "classnames";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import userAPI from "../../../API/userAPI";

import "./ForgotPassword.scss";

const ForgotPassword = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [email, setEmail] = useState('')
    const [clickedNextBtn, setClickedNextBtn] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmitEmail = data => {
        setLoading(true);
        userAPI.forgot(data)
            .then(res => {
                if (res.data.error) {
                    setLoading(false);
                    toast.error(t('forgotPassword:FORGOT_PASSWORD_NOT_FOUND_EMAIL'));
                } else {
                    setLoading(false);
                    setClickedNextBtn(true);
                    setEmail(data.email);
                }
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    };

    return <div className="forgot-password">
        {!clickedNextBtn ? (
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
                    disabled={loading}
                >
                    {t('forgotPassword:FORGOT_PASSWORD_NEXT_BUTTON')}
                    <svg width="36" height="14" viewBox="0 0 36 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.7492 7.81339C36.0849 7.4777 36.0849 6.93344 35.7492 6.59775L30.2788 1.12735C29.9431 0.791663 29.3989 0.791663 29.0632 1.12735C28.7275 1.46304 28.7275 2.00731 29.0632 2.343L33.9257 7.20557L29.0632 12.0681C28.7275 12.4038 28.7275 12.9481 29.0632 13.2838C29.3989 13.6195 29.9431 13.6195 30.2788 13.2838L35.7492 7.81339ZM0.757812 8.06516H35.1414V6.34598H0.757812V8.06516Z" fill="white" />
                    </svg>
                </Button>
            </form>
        ) : clickedNextBtn ? (
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ marginTop: 100 }}>
                    {t('forgotPassword:FORGOT_PASSWORD_TITLE_2')} <span>{email}</span>
                </h1>
            </form>
        ) : null}
    </div>
}

export default ForgotPassword;