import { useState } from "react";
import Web3 from "web3";
import tokenContractABI from "../../Utils/contract/tokenContractABI.json"
import { ETH_RPC } from "../../Utils/contract/contract";
import { toast } from "react-toastify";

const usePayoutDone = () => {
    const [payoutData, setPayoutData] = useState(null);
    const web3 = new Web3(new Web3.providers.HttpProvider(ETH_RPC));

    const getPayoutDone = (address) => {
        const contract = new web3.eth.Contract(tokenContractABI, address);
        contract.methods
            .payoutDone()
            .call()
            .then(res => setPayoutData(res))
            .catch(err => toast.error(err));
    }

    return { payoutData, getPayoutDone };
};

export default usePayoutDone;