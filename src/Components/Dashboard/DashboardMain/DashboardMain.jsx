import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import "./DashboardMain.scss";

const DashboardMain = () => {
    const { t } = useTranslation();

    return <div className="dashboard__main">
        <h1>
            {t('dashboardMain:READY_TO_START')}
        </h1>
        <p>
            {t('dashboardMain:SIGNIN_OR_SIGNUP')}
        </p>
        <div className="dashboard__main-buttons">
            <Link to='/dashboard/login'>
                <Button>
                    {t('dashboardMain:SIGNIN_BUTTON')}
                    <svg width="36" height="14" viewBox="0 0 36 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.9992 7.85221C35.3349 7.51652 35.3349 6.97225 34.9992 6.63656L29.5288 1.16617C29.1931 0.830482 28.6489 0.830482 28.3132 1.16617C27.9775 1.50186 27.9775 2.04612 28.3132 2.38181L33.1757 7.24438L28.3132 12.107C27.9775 12.4426 27.9775 12.9869 28.3132 13.3226C28.6489 13.6583 29.1931 13.6583 29.5288 13.3226L34.9992 7.85221ZM0.0078125 8.10397H34.3914V6.3848H0.0078125V8.10397Z" fill="white" />
                    </svg>
                </Button>
            </Link>
            <Link to='/dashboard/registration'>
                <Button>
                    {t('dashboardMain:SIGNUP_BUTTON')}
                </Button>
            </Link>
        </div>
    </div>
}

export default DashboardMain;