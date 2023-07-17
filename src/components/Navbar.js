import React from "react";
import { useStateContext } from "../context/index";
import Logo from "./Logo";
import { UserAddress } from "./ConnectBtn";

function Navbar() {
  const { address } = useStateContext();
  return (
    <div className="w-full flex justify-between px-8 py-2 border-b border-neutral-200">
      <Logo />
      <div className="inline-flex items-center gap-2">
        <UserAddress />
      </div>
    </div>
  );
}

export default Navbar;
