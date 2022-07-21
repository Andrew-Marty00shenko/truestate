import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./Registration.scss";

const Registration = () => {
    const navigate = useNavigate();

    const handleSubmitForm = () => {
        toast.success('Вы были успешно зарегистрированы!', {
            className: "toast-modal",
            autoClose: 3000,
            progressClassName: 'toast-modal-progress'
        });

        navigate('/dashboard/login');
    };

    return <form className="registration">
        <h1>
            Здесь будет какое-то приветствие!
        </h1>
        <div>
            <p>
                Фамилия
            </p>
            <input
                name="secondName"
                type="text"
                placeholder="Фамилия"
            />
        </div>
        <div>
            <p>
                Имя
            </p>
            <input
                name="firstName"
                type="text"
                placeholder="Имя"
            />
        </div>
        <div>
            <p>
                Email
            </p>
            <input
                name="email"
                type="email"
                placeholder="Email"
            />
        </div>
        <div>
            <p>
                Пароль
            </p>
            <input
                name="password"
                type="password"
                placeholder="Пароль"
            />
        </div>
        <Button onClick={handleSubmitForm}>
            Зарегистрироваться
        </Button>
    </form>
}

export default Registration;