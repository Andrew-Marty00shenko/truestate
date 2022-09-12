import classNames from "classnames";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { registerUser } from "../../../Redux/slices/user";

import "./Registration.scss";

const Registration = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm();
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
                {...register("login", { required: true })}
                className={classNames({ "error": errors?.login })}
                name="login"
                type="text"
                placeholder={t('registration:REGISTRATION_LOGIN')}
            />
            {errors?.login && <p style={{ color: "#ff0000", marginTop: 5 }}>
                {t('registration:REGISTRATION_ERROR')}
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
                placeholder={t('registration:REGISTRATION_EMAIL')}
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
                {...register("password", { required: true })}
                className={classNames({ "error": errors?.password })}
                name="password"
                type="password"
                placeholder={t('registration:REGISTRATION_PASSWORD')}
            />
            {errors?.password && <p style={{ color: "#ff0000", marginTop: 5 }}>
                {t('registration:REGISTRATION_ERROR')}
            </p>}
        </div>

        <Button type="submit">
            {t('registration:REGISTRATION_BUTTON')}
        </Button>

    </form >
}

export default Registration;