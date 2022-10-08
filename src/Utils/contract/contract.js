import Web3 from "web3";
import contractABI from "./contractABI";

// import transactionAPI from "../../API/transactionAPI";

export const ETH_RPC = 'https://rpc-mumbai.maticvigil.com/';
export const HASH_LINK = 'https://mumbai.polygonscan.com/';

const web3 = new Web3(new Web3.providers.HttpProvider(ETH_RPC));

export const contract = new web3.eth.Contract(contractABI.abi, contractABI.address);

export const connectWallet = async () => {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        });

        window.web3 = new Web3(window.ethereum);
        return accounts[0];
    }

    return false;
};

// export const saveTransaction = async tx_hash => {
//     const response = await transactionAPI.saveTransaction(tx_hash);

//     return response;
// };