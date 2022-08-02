import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import "./Balance.scss";

const Balance = () => {
    const { t } = useTranslation();

    return <div className="balance">
        <div className="balance__block">
            <p>
                {t('balance:TOKEN_BALANCE')}
            </p>
            <div>
                00.000.000
            </div>
        </div>
        <div className="balance__button">
            <Button>
                CLAIM
                <svg width="36" height="13" viewBox="0 0 36 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.2492 7.10782C35.5849 6.77213 35.5849 6.22787 35.2492 5.89218L29.7788 0.421787C29.4431 0.0860968 28.8989 0.0860968 28.5632 0.421787C28.2275 0.757478 28.2275 1.30174 28.5632 1.63743L33.4257 6.5L28.5632 11.3626C28.2275 11.6983 28.2275 12.2425 28.5632 12.5782C28.8989 12.9139 29.4431 12.9139 29.7788 12.5782L35.2492 7.10782ZM0.257812 7.35959H34.6414V5.64041H0.257812V7.35959Z" fill="white" />
                </svg>
            </Button>
        </div>
    </div>
}

export default Balance;