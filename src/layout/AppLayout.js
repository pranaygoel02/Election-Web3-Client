import React from "react";
import { useStateContext } from "@/context";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";

function AppLayout({ children }) {
  const { contract } = useStateContext();

  if (!contract) return <Loading />;

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default AppLayout;
