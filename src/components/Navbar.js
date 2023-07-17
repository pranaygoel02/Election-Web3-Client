import React from "react";
import { useStateContext } from "../context/index";

function Navbar() {
  const { connect, address } = useStateContext();

  return (
    <div>
      Navbar
      <button onClick={connect}>Connect</button>
      <p>{address}</p>
    </div>
  );
}

export default Navbar;
