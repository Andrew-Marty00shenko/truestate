import { useState } from "react";
import { Button } from "react-bootstrap"
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { toast } from "react-toastify";
import { connectWallet } from "../../../Utils/contract/contract";

import "./ConnectWalletButton.scss";

const ConnectWalletButton = () => {
    const { t } = useTranslation();
    const checkingResidentOfUsa = useSelector(state => state.checkingResidentOfUsa.value);
    const [addressWallet, setAddressWallet] = useState(null);

    const handleClickConnectWallet = async () => {
        if (window.ethereum) {
            const account = await connectWallet();
            setAddressWallet(account);
        } else {
            toast.error(<>
                {t(`modalInvest:METAMASK_IS_NOT_INSTALLED`)}
                <a href="https://metamask.io/download/">
                    {t(`modalInvest:METAMASK_IS_NOT_INSTALLED_HREF`)}
                </a>
            </>, { autoClose: 5000 });
        }
    };

    return <Button className="connect-wallet-btn"
        onClick={handleClickConnectWallet}
        disabled={checkingResidentOfUsa || window.location.pathname === '/dashboard/login'}
    >
        {addressWallet === null
            ? t('dashboardMain:DASHBOARD_CONNECT_WALLET')
            : `${t('dashboardMain:DASHBOARD_CONNECTED_WALLET')} ${addressWallet.substr(0, 4)
            + '...'
            + addressWallet.substr(addressWallet.length - 4, addressWallet.length)
            }`}
    </Button>
}

export default ConnectWalletButton;