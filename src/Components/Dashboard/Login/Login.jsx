import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "../../../Redux/slices/user";

import "./Login.scss";

const Login = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const loading = useSelector(state => state.user.loading);
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuth) {
            navigate('/dashboard/data');
        }
    }, [isAuth]);

    const onSubmit = (data) => {
        dispatch(loginUser(data));
    };

    return <form className="login"
        onSubmit={handleSubmit(onSubmit)}
    >
        <div>
            <p style={errors?.login && { color: "#ff0000" }}>
                {t('login:LOGIN')}:
            </p>
            <input
                className={classNames({ "error": errors?.login })}
                {...register("login", { required: true })}
                type="text"
                placeholder={t('login:LOGIN')}
            />
            {errors?.login && <p style={{ color: "#ff0000", marginTop: 5 }}>
                {t('login:USERNAME_ERROR')}
            </p>}
        </div>
        <div>
            <p style={errors?.password && { color: "#ff0000" }}>
                {t('login:PASSWORD')}:
            </p>
            <input
                className={classNames({ "error": errors?.password })}
                {...register("password", { required: true })}
                type="password"
                placeholder={t('login:PASSWORD')}
            />
            {errors?.password && <p style={{ color: "#ff0000", marginTop: 5 }}>
                {t('login:PASSWORD_ERROR')}
            </p>}
        </div>
        <div>
            <Link to='/dashboard/forgot-password'>
                {t('login:FORGOT_PASSWORD')}
            </Link>
        </div>
        <Button type="sumbit" disabled={loading}>
            {t('login:SIGNIN')}
            <svg width="36" height="13" viewBox="0 0 36 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.2492 7.10782C35.5849 6.77213 35.5849 6.22787 35.2492 5.89218L29.7788 0.421787C29.4431 0.0860968 28.8989 0.0860968 28.5632 0.421787C28.2275 0.757478 28.2275 1.30174 28.5632 1.63743L33.4257 6.5L28.5632 11.3626C28.2275 11.6983 28.2275 12.2425 28.5632 12.5782C28.8989 12.9139 29.4431 12.9139 29.7788 12.5782L35.2492 7.10782ZM0.257812 7.35959H34.6414V5.64041H0.257812V7.35959Z" fill="white" />
            </svg>
        </Button>
    </form>
}

export default Login;