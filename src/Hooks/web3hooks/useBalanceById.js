import { useState } from "react";
import { toast } from "react-toastify";

import { contract } from "../../Utils/contract/contract";

const useBalanceById = () => {
    const [balance, setBalance] = useState(null);

    const getBalance = (id) =>
        contract.methods
            .getBalanceByID(id)
            .call()
            .then((res) => {
                console.log(res)
                setBalance(res);
            })
            .catch((e) => {
                toast(e.message, { type: "error" });
            });

    return { balance, getBalance };
};

export default useBalanceById;