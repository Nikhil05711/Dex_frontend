import { useEffect } from "react";
import { ethers } from "ethers";
import { useLocalStorageBoolean } from "react-use-window-localstorage";

export const WalletService = () => {
  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const [isConnected, setIsConnected] = useLocalStorageBoolean(
    "connection",
    false
  );

  const accounts = "";
  useEffect(() => {
    isMetamaskAvailable();
  }, []);

  const target_copy = Object.assign({}, ethereum);
  const isMetamaskAvailable = async () => {
    console.log(target_copy.selectedAddress);
    if (target_copy.selectedAddress == null) {
      setIsConnected(false);
      console.log(null);
    } else {
      setIsConnected(true);
      console.log("address is", target_copy.selectedAddress);
    }
  };

  const connectWallet = async () => {
    try {
      if (!target_copy.selectedAddress == null) {
        setIsConnected(true);
      } else {
        accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        setIsConnected(true);
      }
    } catch (error) {
      setIsConnected(false);
    }
  };

  return {
    isMetamaskAvailable,
    connectWallet,
    accounts,
    provider,
    isConnected,
    setIsConnected,
  };
};
