import { createContext, useContext, useEffect } from "react";

import {
  useAddress,
  useContract,
  useMetamask,
  useContractRead,
  useContractEvents,
  useContractWrite,
} from "@thirdweb-dev/react";

import { ethers } from "ethers";

const StateContext = createContext();

export function StateProvider({ children }) {
  const { contract } = useContract(
    "0xe485ab34AC3Ea1D3C1551146d9f4283B3e228270"
  );

  const connect = useMetamask();
  const address = useAddress();

  return (
    <StateContext.Provider value={{ contract, address, connect }}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);
