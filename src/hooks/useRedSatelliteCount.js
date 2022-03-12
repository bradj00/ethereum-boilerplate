import { useEffect, useState } from "react";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall, useMoralis } from "react-moralis";

const useNFTsByOwnerAndContract = (options) => {
  const { account } = useMoralisWeb3Api();
  const { chainId } = useMoralis();

  const { isInitialized } = useMoralis();

  const {
    fetch: userNFTsForContract,
    data,
    error,
    isLoading,
  } = useMoralisWeb3ApiCall(account.getNFTsForContract, { chain: chainId, ...options });

  useEffect(() => {
    if (isInitialized) {
      userNFTsForContract();    
    }
  }, [isInitialized])

  return { userNFTsForContract, data, error, isLoading };
}

export default useNFTsByOwnerAndContract;
