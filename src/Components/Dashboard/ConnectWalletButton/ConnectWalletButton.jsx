import { useState } from "react";
import { Button } from "react-bootstrap"
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { connectWallet } from "../../../Utils/contract/contract";

import "./ConnectWalletButton.scss";

const ConnectWalletButton = () => {
    const { t } = useTranslation();
    const checkingResidentOfUsa = useSelector(state => state.checkingResidentOfUsa.value);
    const [addressWallet, setAddressWallet] = useState(null);

    const handleClickConnectWallet = async () => {
        const account = await connectWallet();
        setAddressWallet(account);
    };

    return <Button className="connect-wallet-btn"
        onClick={handleClickConnectWallet}
        disabled={checkingResidentOfUsa || window.location.pathname === '/dashboard/login'}
    >
        {addressWallet === null
            ? t('dashboardMain:DASHBOARD_CONNECT_WALLET')
            : `${addressWallet.substr(0, 8)
            + '...'
            + addressWallet.substr(addressWallet.length - 8, addressWallet.length)
            }`}
    </Button>
}

export default ConnectWalletButton;