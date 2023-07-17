import React from "react";
import { useStateContext } from "@/context";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

function AppLayout({ children }) {
  const { contract, address, isElectionCommission } = useStateContext();

  if (!contract || !address) return <Loading />;

  return (
    <div className={`flex ${isElectionCommission ? 'flex-row' : 'flex-col'}`}>
      {isElectionCommission ? <Sidebar/> :  <Navbar />}
      {children}
    </div>
  );
}

export default AppLayout;
