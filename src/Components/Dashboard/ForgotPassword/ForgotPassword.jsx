import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "./ForgotPassword.scss";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [clickedNextBtn, setClickedNextBtn] = useState(false);
    const [clickedSubmitKeyBtn, setClickedSubmitKeyBtn] = useState(false);
    const [clickedChangePassword, setClickedChangePassword] = useState(false);

    const handleSubmitEmail = e => {
        if (email) {
            setClickedNextBtn(true);
        } else {
            toast.error('Введите верную почту!', {
                className: "toast-modal",
                autoClose: 3000,
                progressClassName: 'toast-modal-progress'
            });
        }
    };

    return <form className="forgot-password">
        {!clickedNextBtn && !clickedSubmitKeyBtn && !clickedChangePassword ? (
            <>
                <h1>
                    Забыли пароль?
                </h1>

                <h2>
                    Введите адрес Вашей электронной почты.
                </h2>

                <div>
                    <p>
                        Email
                    </p>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <Button
                    onClick={handleSubmitEmail}
                    className="btn-first"
                >
                    Далее
                    <svg width="36" height="14" viewBox="0 0 36 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.7492 7.81339C36.0849 7.4777 36.0849 6.93344 35.7492 6.59775L30.2788 1.12735C29.9431 0.791663 29.3989 0.791663 29.0632 1.12735C28.7275 1.46304 28.7275 2.00731 29.0632 2.343L33.9257 7.20557L29.0632 12.0681C28.7275 12.4038 28.7275 12.9481 29.0632 13.2838C29.3989 13.6195 29.9431 13.6195 30.2788 13.2838L35.7492 7.81339ZM0.757812 8.06516H35.1414V6.34598H0.757812V8.06516Z" fill="white" />
                    </svg>
                </Button>
            </>
        ) : clickedNextBtn && !clickedSubmitKeyBtn && !clickedChangePassword ? (
            <>
                <h1>
                    Код для восстановления пароля <br />
                    отправлен на почту <span>{email}</span>
                </h1>

                <div>
                    <p>
                        Введите код
                    </p>
                    <input
                        name="key"
                        type="text"
                        placeholder="Введите код"
                    />
                </div>

                <Button
                    className="btn-second"
                    onClick={() => setClickedSubmitKeyBtn(true)}
                >
                    Отправить
                    <svg width="36" height="14" viewBox="0 0 36 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.7492 7.81339C36.0849 7.4777 36.0849 6.93344 35.7492 6.59775L30.2788 1.12735C29.9431 0.791663 29.3989 0.791663 29.0632 1.12735C28.7275 1.46304 28.7275 2.00731 29.0632 2.343L33.9257 7.20557L29.0632 12.0681C28.7275 12.4038 28.7275 12.9481 29.0632 13.2838C29.3989 13.6195 29.9431 13.6195 30.2788 13.2838L35.7492 7.81339ZM0.757812 8.06516H35.1414V6.34598H0.757812V8.06516Z" fill="white" />
                    </svg>
                </Button>
            </>
        ) : clickedSubmitKeyBtn ? (
            <>
                <h1>
                    Измените пароль
                </h1>

                <div>
                    <p>
                        Новый пароль
                    </p>
                    <input
                        name="password_1"
                        type="password"
                        placeholder="Новый пароль"
                    />
                </div>

                <div style={{
                    marginTop: 24
                }}>
                    <p>
                        Введите новый пароль повторно
                    </p>
                    <input
                        name="password_2"
                        type="password"
                        placeholder="Введите новый пароль повторно"
                    />
                </div>

                <Button className="btn-third"
                    onClick={() => {
                        setClickedChangePassword(true);
                        setClickedSubmitKeyBtn(false);
                        setClickedNextBtn(false);
                    }}
                >
                    Изменить пароль
                    <svg width="36" height="14" viewBox="0 0 36 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.7492 7.81339C36.0849 7.4777 36.0849 6.93344 35.7492 6.59775L30.2788 1.12735C29.9431 0.791663 29.3989 0.791663 29.0632 1.12735C28.7275 1.46304 28.7275 2.00731 29.0632 2.343L33.9257 7.20557L29.0632 12.0681C28.7275 12.4038 28.7275 12.9481 29.0632 13.2838C29.3989 13.6195 29.9431 13.6195 30.2788 13.2838L35.7492 7.81339ZM0.757812 8.06516H35.1414V6.34598H0.757812V8.06516Z" fill="white" />
                    </svg>
                </Button>
            </>
        ) : clickedChangePassword && !clickedSubmitKeyBtn && !clickedNextBtn ? (
            <>
                <h1 className="fourth">
                    Пароль успешно изменен!
                </h1>
                <Link to='/dashboard/login'>
                    <Button className="btn-fourth"

                    >
                        Перейти в личный кабинет
                        <svg width="36" height="14" viewBox="0 0 36 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.7492 7.81339C36.0849 7.4777 36.0849 6.93344 35.7492 6.59775L30.2788 1.12735C29.9431 0.791663 29.3989 0.791663 29.0632 1.12735C28.7275 1.46304 28.7275 2.00731 29.0632 2.343L33.9257 7.20557L29.0632 12.0681C28.7275 12.4038 28.7275 12.9481 29.0632 13.2838C29.3989 13.6195 29.9431 13.6195 30.2788 13.2838L35.7492 7.81339ZM0.757812 8.06516H35.1414V6.34598H0.757812V8.06516Z" fill="white" />
                        </svg>
                    </Button>
                </Link>
            </>
        ) : null}


    </form>
}

export default ForgotPassword;