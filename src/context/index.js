import { createContext, useContext, useEffect, useState } from "react";

import {
  useAddress,
  useContract,
  useMetamask,
  useContractRead,
  useContractEvents,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { toast } from "react-hot-toast";

const StateContext = createContext();

export function StateProvider({ children }) {
  const { contract } = useContract(
    "0xe485ab34AC3Ea1D3C1551146d9f4283B3e228270"
  );
  const connect = useMetamask();
  const address = useAddress();

  const [electionCommission, setElectionCommission] = useState(null);
  const [isElectionCommission, setIsElectionCommission] = useState(false);
  const [age, setAge] = useState(null);

  useEffect(() => {
    const getElectionCommisionAddress = async () => {
      const data = await contract?.call("electionCommission", []);
      console.log(data);
      setElectionCommission((prev) => data);
    };
    getElectionCommisionAddress();
  }, [contract]);

  useEffect(() => {
    if (address) {
      setIsElectionCommission((prev) => address === electionCommission);
    }
  }, [address]);

  useEffect(() => {
    const getAge = async () => {
      const data = await contract?.call("minimumVotingAge", []);
      setAge(prev => data)
    };
    getAge();
  }, [contract]);

  const setNewMinimumVotingAge = async (e) => {
    e.preventDefault()
    const age = e.target.age.value
    const loadingToast = toast.loading('Updating minimum voting age...')
    try {
      const data = await contract?.call("setMinimumVotingAge", [age])
      console.log(data)
      setAge(prev => age)
      toast.success('Minimum voting age updated successfully')
    }
    catch(err) {
      console.log(err)
      toast.error('Something went wrong')
    }
    finally {
      toast.dismiss(loadingToast)
    }
  }

  return (
    <StateContext.Provider
      value={{
        contract,
        address,
        connect,
        electionCommission,
        isElectionCommission,
        age,
        setNewMinimumVotingAge
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);
