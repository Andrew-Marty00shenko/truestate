import classNames from "classnames";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { registerUser } from "../../../Redux/slices/user";

import "./Registration.scss";

const Registration = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const loading = useSelector(state => state.user.loading);
    const dispatch = useDispatch();

    const onSubmit = data => {
        dispatch(registerUser(data));
    };

    return <form className="registration" onSubmit={handleSubmit(onSubmit)}>
        <h1>
            {t('registration:REGISTRATION_TITLE')}
        </h1>
        <p style={{ fontSize: 22, marginTop: 15, lineHeight: '20px' }}>
            {t('registration:REGISTRATION_TEXT')}
        </p>

        <div>
            <p style={errors?.login && { color: "#ff0000" }}>
                {t('registration:REGISTRATION_LOGIN')}:
            </p>
            <input
                {...register("login", {
                    required: true,
                    pattern: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g
                })}
                className={classNames({ "error": errors?.login })}
                name="login"
                type="text"
                placeholder={t('registration:REGISTRATION_LOGIN_PLACEHOLDER')}
            />
            {errors?.login?.type === 'required' && <p style={{ color: "#ff0000", marginTop: 5 }}>
                {t('registration:REGISTRATION_ERROR')}
            </p>}
            {errors?.login?.type === 'pattern' && <p style={{ color: "#ff0000", marginTop: 5 }}>
                {t('registration:REGISTRATION_ERROR_LOGIN')}
            </p>}
        </div>

        <div>
            <p style={errors?.email && { color: "#ff0000" }}>
                {t('registration:REGISTRATION_EMAIL')}:
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
                placeholder={t('registration:REGISTRATION_EMAIL_PLACEHOLDER')}
            />
            {errors?.email && <p style={{ color: "#ff0000", marginTop: 5 }}>
                {t('registration:REGISTRATION_ERROR')}
            </p>}
        </div>

        <div>
            <p style={errors?.password && { color: "#ff0000" }}>
                {t('registration:REGISTRATION_PASSWORD')}:
            </p>
            <input
                {...register("password", {
                    required: true,
                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
                })}
                className={classNames({ "error": errors?.password })}
                name="password"
                type="password"
                placeholder={t('registration:REGISTRATION_PASSWORD_PLACEHOLDER')}
            />
            {errors?.password?.type === 'required' && <p style={{ color: "#ff0000", marginTop: 5 }}>
                {t('registration:REGISTRATION_ERROR')}
            </p>}
            {errors?.password?.type === 'pattern' && <p style={{ color: "#ff0000", marginTop: 5, fontSize: 12 }}>
                {t('registration:REGISTRATION_ERROR_PATTERN')}
            </p>}
        </div>

        <Button type="submit" disabled={loading}>
            {t('registration:REGISTRATION_BUTTON')}
        </Button>

    </form >
}

export default Registration;