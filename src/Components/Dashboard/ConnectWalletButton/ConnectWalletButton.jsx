import { Button } from "react-bootstrap"
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux/es/hooks/useSelector";

import "./ConnectWalletButton.scss";

const ConnectWalletButton = () => {
    const { t } = useTranslation();
    const checkingResidentOfUsa = useSelector(state => state.checkingResidentOfUsa.value);

    return <Button className="connect-wallet-btn" disabled={checkingResidentOfUsa}>
        {t('dashboardMain:DASHBOARD_CONNECT_WALLET')}
    </Button>
}

export default ConnectWalletButton;