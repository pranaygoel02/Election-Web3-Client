import React from "react";
import { useStateContext } from "../context/index";
import Logo from "./Logo";
import ConnectBtn from "./ConnectBtn";

function Navbar() {
  const { address } = useStateContext();
  return (
    <div className="w-full flex justify-between px-8 py-2 ">
      <Logo />
      <div className="inline-flex items-center gap-2">
        <p className="bg-neutral-200 rounded-full p-2">
          {address.slice(0, 4)}....{address.slice(address.length - 4)}
        </p>
      </div>
    </div>
  );
}

export default Navbar;
