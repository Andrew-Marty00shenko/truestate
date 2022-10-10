import { useState } from "react";
import { toast } from "react-toastify";

import { contract } from "../../Utils/contract/contract";

const useMinAmount = () => {
    const [minAmount, setMinAmount] = useState(null);

    const getMinAmount = () =>
        contract.methods
            .getMinAmount()
            .call()
            .then((res) => {
                console.log(res)
                // setBalance(res);
            })
            .catch((e) => {
                toast(e.message, { type: "error" });
            });

    return { minAmount, getMinAmount };
};

export default useMinAmount;