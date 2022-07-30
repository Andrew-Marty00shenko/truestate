import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./Registration.scss";

const Registration = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleSubmitForm = () => {
        toast.success(t('registration:REGISTRATION_NOTIFICATION'), {
            className: "toast-modal",
            autoClose: 3000,
            progressClassName: 'toast-modal-progress'
        });

        navigate('/dashboard/login');
    };

    return <form className="registration">
        <h1>
            {t('registration:REGISTRATION_TITLE')}
        </h1>
        <p style={{ fontSize: 22, marginTop: 15, lineHeight: '20px' }}>
            {t('registration:REGISTRATION_TEXT')}
        </p>
        <div>
            <p>
                {t('registration:REGISTRATION_SECOND_NAME')}
            </p>
            <input
                name="secondName"
                type="text"
                placeholder={t('registration:REGISTRATION_SECOND_NAME')}
            />
        </div>
        <div>
            <p>
                {t('registration:REGISTRATION_NAME')}
            </p>
            <input
                name="firstName"
                type="text"
                placeholder={t('registration:REGISTRATION_NAME')}
            />
        </div>
        <div>
            <p>
                {t('registration:REGISTRATION_EMAIL')}
            </p>
            <input
                name="email"
                type="email"
                placeholder={t('registration:REGISTRATION_EMAIL')}
            />
        </div>
        <div>
            <p>
                {t('registration:REGISTRATION_PASSWORD')}
            </p>
            <input
                name="password"
                type="password"
                placeholder={t('registration:REGISTRATION_PASSWORD')}
            />
        </div>
        <Button onClick={handleSubmitForm}>
            {t('registration:REGISTRATION_BUTTON')}
        </Button>
    </form>
}

export default Registration;