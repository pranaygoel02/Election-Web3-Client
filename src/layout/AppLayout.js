import React from "react";
import { useStateContext } from "@/context";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import ConnectBtn from "@/components/ConnectBtn";

function AppLayout({ children }) {
  const { contract, address } = useStateContext();

  if (!contract || !address) return <Loading />;

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default AppLayout;
