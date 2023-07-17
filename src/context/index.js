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

  const addNewConstituency = async (e, stateId) => {
    e.preventDefault()
    const name = e.target.constituency.value
    const loadingToast = toast.loading('Adding new constituency...')
    try {
      const data = await contract.call("createNewConstituency", [name, stateId])
      toast.success('New constituency added successfully')
      getConstituencies(stateId)
    }
    catch(err) {
      console.log(err)
      toast.error('Something went wrong')
    }
    finally {
      toast.dismiss(loadingToast)
    }
  }
  const addNewState = async (e) => {
    e.preventDefault()
    const state = e.target.state.value
    const loadingToast = toast.loading('Adding new state...')
    try {
      const data = await contract.call("createNewState", [state])      
      toast.success('New state added successfully')
      getStates()
    }
    catch(err) {
      console.log(err)
      toast.error('Something went wrong')
    }
    finally {
      toast.dismiss(loadingToast)
    }
  }
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

  const [states,setStates] = useState([])

  const getStates = async () => {
    const data = await contract?.call("getStates", []);
    console.log(data);
    let stateList = data.map((item,index) => (
      {
        id: index + 1,
        name: item.name,
        constituencies: item.registeredConstituencies
      }
    ))
    stateList = stateList.filter(item => item.name !== '').map(item => ({...item, constituencies: item.constituencies.length, linkToConstituencies: `/state/${item.name}/${item.id - 1}` }))
    setStates(prev => stateList)
  }

  const [constituencyList, setConstituencyList] = useState([])

  const getConstituencies = async (stateId) => {
    const data = await contract.call("getConstituencies", [stateId])
    console.log(data)
    setConstituencyList(prev => data.map((item,index) => ({
      id: index + 1,
      name: item.name,
    })))
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
        setNewMinimumVotingAge,
        addNewState,
        states,
        getStates,
        getConstituencies,
        constituencyList,
        addNewConstituency
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);
