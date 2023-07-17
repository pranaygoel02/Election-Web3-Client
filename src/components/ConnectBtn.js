import React from "react";
import { MdOutlinePerson, MdWallet } from "react-icons/md";
import { useStateContext } from "@/context";

function ConnectBtn() {
  const { connect, contract } = useStateContext();

  if (!contract) return null;

  return (
    <button
      onClick={connect}
      className="bg-orange-500 p-2 rounded-md text-white text-sm"
    >
      <MdWallet /> Connect Wallet
    </button>
  );
}

export function UserAddress () {
  const { address } = useStateContext();

  return (
    <p className="bg-neutral-200 inline-flex items-center gap-2 rounded-full text-sm p-2">
          <MdOutlinePerson />
          {address.slice(0, 4)}....{address.slice(address.length - 4)}
        </p>
  )
}

export default ConnectBtn;
