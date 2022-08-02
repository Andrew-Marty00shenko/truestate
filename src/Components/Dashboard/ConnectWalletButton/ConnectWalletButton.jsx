import { Button } from "react-bootstrap"
import { useTranslation } from "react-i18next";

import "./ConnectWalletButton.scss";

const ConnectWalletButton = () => {
    const { t } = useTranslation();

    return <Button className="connect-wallet-btn">
        {t('dashboardMain:DASHBOARD_CONNECT_WALLET')}
    </Button>
}

export default ConnectWalletButton;