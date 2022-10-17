import classNames from "classnames";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Web3 from "web3";
import axios from "axios";

import { connectWallet, saveTransaction } from "../../../Utils/contract/contract";
import useMinAmount from "../../../Hooks/web3hooks/useMinAmount";

import "./Modal.scss";
import { Link } from "react-router-dom";

const Modal = ({ openModalAddress, setOpenModalAddress, activeObjectEstate }) => {
    const { t } = useTranslation();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const watchAllFields = watch();
    const { minAmount, getMinAmount } = useMinAmount();
    const [loading, setLoading] = useState(false);
    const [ethCurrency, setEthCurrency] = useState(null);
    const [maticCurrency, setMaticCurrency] = useState(null);

    useEffect(() => {
        getMinAmount();
        axios.get('https://min-api.cryptocompare.com/data/price?fsym=EUR&tsyms=ETH')
            .then(({ data }) => setEthCurrency(data.ETH));
        axios.get('https://min-api.cryptocompare.com/data/price?fsym=EUR&tsyms=MATIC')
            .then(({ data }) => setMaticCurrency(data.MATIC));
    }, []);

    const notify = () => {
        toast.success(t('modalInvest:NOTIFICATION'), {
            className: "toast-modal",
            autoClose: 3000,
            progressClassName: 'toast-modal-progress'
        });
    };

    const onSubmit = (data) => {
        if (window.localStorage.access_token) {
            if (!window.ethereum) {
                toast.error(<>
                    {t(`modalInvest:METAMASK_IS_NOT_INSTALLED`)}
                    <a href="https://metamask.io/download/">
                        {t(`modalInvest:METAMASK_IS_NOT_INSTALLED_HREF`)}
                    </a>
                </>, { autoClose: 5000 });
            } else if ((watchAllFields.amount < minAmount) && watchAllFields.currency === 'ETH') {
                toast.error(`${t('modalInvest:LITTLE_AMOUNT')} ${minAmount} ETH`, { autoClose: 5000 });
            } else if ((watchAllFields.amount < 100) && watchAllFields.currency === 'EUR') {
                toast.error(`${t('modalInvest:LITTLE_AMOUNT')} 100€`, { autoClose: 5000 });
            } else {
                // if (watchAllFields.currency === 'EUR' && (data.amount > ethCurrency * 100)) {
                //     invest(ethCurrency * data.amount);
                // } else {
                //     invest(data.amount);
                // }
                if (watchAllFields.currency === 'EUR') {
                    invest(maticCurrency * data.amount);
                } else {
                    invest(data.amount);
                }
            }
        } else {
            toast.error(<>
                {t('modalInvest:LOGIN_IN_ACCOUNT')}
                <Link to="/dashboard/login">
                    {t('modalInvest:LOGIN_IN_ACCOUNT_HREF_1')}
                </Link>
                {t('modalInvest:LOGIN_IN_ACCOUNT_TEXT_2')}
                <Link to="/dashboard/registration">
                    {t('modalInvest:LOGIN_IN_ACCOUNT_HREF_2')}
                </Link>
            </>);
        }
    };

    const invest = async (amount) => {
        const account = await connectWallet();
        window.web3 = new Web3(window.ethereum);

        window.web3.eth.sendTransaction({
            from: account,
            to: activeObjectEstate.contract,
            value: window.web3.utils.toWei(String(amount))
        })
            .on('transactionHash', hash => {
                setLoading(true);
                saveTransaction(hash)
                    .then(res => {
                        toast.success(`${t('modalInvest:SUCCESS_INVEST')} ${activeObjectEstate !== null ? (
                            activeObjectEstate.id < 10
                                ? `TRUESTATE №0000${activeObjectEstate.id}`
                                : activeObjectEstate.id < 100
                                    ? `TRUESTATE №000${activeObjectEstate.id}`
                                    : activeObjectEstate.id < 1000
                                        ? `TRUESTATE №00${activeObjectEstate.id}`
                                        : activeObjectEstate.id < 10000
                                            ? `TRUESTATE №0${activeObjectEstate.id}`
                                            : null
                        ) : (
                            null
                        )}`);
                        setLoading(false);
                    })
            })
            .on('error', error => {
                toast.error(error);
                setLoading(false);
            });
    }

    return <div className={classNames("section-seven__modal", {
        "section-seven__modal--active": openModalAddress,
        "section-seven__modal--hidden": !openModalAddress,
    })}>
        <div className="section-seven__modal-close-btn"
            onClick={() => setOpenModalAddress(false)}
        >
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L26 26" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <path d="M1 26L26 1.00002" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </div>
        <h3>
            {t('modalInvest:YOU_HAVE_CHOOSEN')} {`${activeObjectEstate !== null ? (
                activeObjectEstate.id < 10
                    ? `TRUESTATE №0000${activeObjectEstate.id}`
                    : activeObjectEstate.id < 100
                        ? `TRUESTATE №000${activeObjectEstate.id}`
                        : activeObjectEstate.id < 1000
                            ? `TRUESTATE №00${activeObjectEstate.id}`
                            : activeObjectEstate.id < 10000
                                ? `TRUESTATE №0${activeObjectEstate.id}`
                                : null
            ) : (
                null
            )}`}.
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <p> {t('modalInvest:CONTRACT_NUMBER')}</p>
                <div>
                    xxxx xxxx xxxx xxxx
                    <CopyToClipboard text={activeObjectEstate?.contract}>
                        <svg
                            onClick={notify}
                            width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 7.5V21H7.5V7.5H21ZM21 6H7.5C7.10218 6 6.72064 6.15804 6.43934 6.43934C6.15804 6.72064 6 7.10218 6 7.5V21C6 21.3978 6.15804 21.7794 6.43934 22.0607C6.72064 22.342 7.10218 22.5 7.5 22.5H21C21.3978 22.5 21.7794 22.342 22.0607 22.0607C22.342 21.7794 22.5 21.3978 22.5 21V7.5C22.5 7.10218 22.342 6.72064 22.0607 6.43934C21.7794 6.15804 21.3978 6 21 6Z" fill="#949494" />
                            <path d="M3 13.5H1.5V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H13.5V3H3V13.5Z" fill="#949494" />
                        </svg>
                    </CopyToClipboard>
                </div>
            </div>
            <div className="form__input">
                <div>
                    <p style={errors.amount && { color: '#ff0000' }}>
                        {t('modalInvest:AMOUNT_INVEST')}
                    </p>
                    <input
                        {...register("amount", { required: true })}
                        className={classNames({ "error": errors.amount })}
                        type="text"
                        placeholder={t('modalInvest:AMOUNT_INVEST')}
                    />
                </div>
                <div>
                    <p>{t('modalInvest:CURRENCY')}</p>
                    <Form.Select
                        placeholder={t('modalInvest:CURRENCY')}
                        {...register("currency", { required: true })}
                    >
                        <option value="ETH">
                            ETH
                        </option>
                        <option value="EUR">
                            €
                        </option>
                    </Form.Select>
                </div>
            </div>
            <div className="form__checkbox">
                <input
                    id="check"
                    type="checkbox"
                    {...register("privacy_policy", { required: true })}
                />
                <label htmlFor="check"> {t('modalInvest:PRIVACY_POLICY')}</label>
            </div>
            <Button
                type="submit"
                disabled={!watchAllFields.privacy_policy || loading}
            >
                {t('modalInvest:INVEST')}
                <svg width="35" height="14" viewBox="0 0 35 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.7514 7.5444C35.075 7.22075 35.075 6.696 34.7514 6.37235L29.4771 1.09811C29.1535 0.774452 28.6287 0.774452 28.3051 1.09811C27.9814 1.42176 27.9814 1.94651 28.3051 2.27016L32.9933 6.95837L28.3051 11.6466C27.9814 11.9702 27.9814 12.495 28.3051 12.8186C28.6287 13.1423 29.1535 13.1423 29.4771 12.8186L34.7514 7.5444ZM0.832031 7.78714H34.1654V6.12961H0.832031V7.78714Z" fill="white" />
                </svg>
            </Button>
        </form>
    </div >
}

export default Modal;