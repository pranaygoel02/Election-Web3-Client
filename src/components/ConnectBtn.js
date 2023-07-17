import React from "react";
import { MdWallet } from "react-icons/md";
import { useStateContext } from "@/context";

function ConnectBtn() {
  const { connect } = useStateContext();

  return (
    <button
      onClick={connect}
      className="bg-orange-500 p-2 rounded-md text-white text-sm"
    >
      <MdWallet /> Connect Wallet
    </button>
  );
}

export default ConnectBtn;
