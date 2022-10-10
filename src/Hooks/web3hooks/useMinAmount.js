import { useState } from "react";
import { toast } from "react-toastify";
import Web3 from "web3";

import { contract } from "../../Utils/contract/contract";

const useMinAmount = () => {
    const [minAmount, setMinAmount] = useState(null);

    const getMinAmount = () =>
        contract.methods
            .getMinAmount()
            .call()
            .then((res) => {
                setMinAmount(Web3.utils.fromWei(res));
            })
            .catch((e) => {
                toast(e.message, { type: "error" });
            });

    return { minAmount, getMinAmount };
};

export default useMinAmount;