import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";

import userAPI from "../../../API/userAPI";
import { connectWallet } from "../../../Utils/contract/contract";
import contractABI from "../../../Utils/contract/contractABI.json";

import "./Balance.scss";
import usePayoutDone from "../../../Hooks/web3hooks/usePayoutDone";
import kycDataAPI from "../../../API/kycDataAPI";

const Balance = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const checkingResidentOfUsa = useSelector(state => state.checkingResidentOfUsa.value);
    const isAuth = useSelector(state => state.user.isAuth);
    const { getPayoutDone, payoutData } = usePayoutDone();

    const [objectData, setObjectData] = useState([]);
    const [activeObjectId, setActiveObjectId] = useState(null);
    const [checkVerifyKyc, setCheckVerifyKyc] = useState(false);

    useEffect(() => {
        if (!isAuth) {
            navigate('/dashboard/login');
        }
    }, []);

    useEffect(() => {
        userAPI.balance()
            .then(({ data }) => {
                getPayoutDone(data[0]?.contract);
                setObjectData(data);
                setActiveObjectId(data[0]?.object_id);
            });

        kycDataAPI.getKycData()
            .then(({ data }) => setCheckVerifyKyc(data.status));
    }, []);

    const onSubmit = async (data) => {
        if (window.ethereum) {
            if (checkVerifyKyc !== 2) {
                toast.error(t(`balance:FINISH_KYC`), { autoClose: 5000 });
            } else if (!payoutData) {
                toast.error(t(`balance:PROJECT_IS_NOT_COMPLETED`), { autoClose: 5000 });
            } else {
                const account = await connectWallet();
                const contract = new window.web3.eth.Contract(
                    contractABI.abi,
                    contractABI.address,
                    { from: account }
                );

                contract.methods[
                    'claim(uint256,address)'
                ](Number(activeObjectId), account)
                    .send()
                    .then(res => {
                        toast.success(t(`balance:SUCCESS_TRANSACTION`));
                    })
                    .catch(err => {
                        toast.error(err);
                    });
            }

        } else {
            toast.error(<>
                {t(`modalInvest:METAMASK_IS_NOT_INSTALLED`)}
                <a href="https://metamask.io/download/">
                    {t(`modalInvest:METAMASK_IS_NOT_INSTALLED_HREF`)}
                </a>
            </>, { autoClose: 5000 });
        }
    };

    return <form className="balance" onSubmit={handleSubmit(onSubmit)}>
        <div className="balance__block one">

            <div className="balance__block-select">
                <p>
                    {t('balance:CHOOSE_OBJECT')}
                </p>
                <Form.Select
                    {...register("object_id", {
                        onChange: e => {
                            const address = objectData?.filter(object => object.object_id === Number(e.target.value))[0]?.contract;
                            setActiveObjectId(e.target.value);
                            getPayoutDone(address);
                        }
                    })}
                    defaultValue="1"
                >
                    {objectData.length !== 0 ? objectData?.map(object => {
                        return <option
                            key={object.object_id}
                            value={object.object_id}
                        >
                            {object.object_id < 10
                                ? `TRUESTATE №0000${object.object_id}`
                                : object.object_id < 100
                                    ? `TRUESTATE №000${object.object_id}`
                                    : object.object_id < 1000
                                        ? `TRUESTATE №00${object.object_id}`
                                        : object.object_id < 10000
                                            ? `TRUESTATE №0${object.object_id}`
                                            : `TRUESTATE №${object.object_id}`
                            }
                        </option>
                    }) : <option value={t('balance:INVESTMENTS_NOT_YET')}>
                        {t('balance:INVESTMENTS_NOT_YET')}
                    </option>}
                </Form.Select>
            </div>

            <div className="balance__block-info">
                <p>
                    {t('balance:TOKEN_BALANCE')}
                </p>
                <div>
                    {objectData.length !== 0
                        ? objectData?.filter(object => object.object_id === Number(activeObjectId))[0]?.tokens || '00.000.000'
                        : '00.000.000'
                    }
                </div>
            </div>

            {
                checkingResidentOfUsa && <span style={{
                    position: "absolute",
                    marginTop: 30,
                    color: "#ff0000"
                }}>
                    {t('balance:CANT_BUY')}
                </span>
            }


            <Button disabled={checkingResidentOfUsa || objectData.length === 0} type="submit">
                CLAIM
                <svg width="36" height="13" viewBox="0 0 36 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.2492 7.10782C35.5849 6.77213 35.5849 6.22787 35.2492 5.89218L29.7788 0.421787C29.4431 0.0860968 28.8989 0.0860968 28.5632 0.421787C28.2275 0.757478 28.2275 1.30174 28.5632 1.63743L33.4257 6.5L28.5632 11.3626C28.2275 11.6983 28.2275 12.2425 28.5632 12.5782C28.8989 12.9139 29.4431 12.9139 29.7788 12.5782L35.2492 7.10782ZM0.257812 7.35959H34.6414V5.64041H0.257812V7.35959Z" fill="white" />
                </svg>
            </Button>

        </div >
    </form >
}

export default Balance;