import React from "react";
import Logo from "./Logo";
import ConnectBtn from "./ConnectBtn";

function Loading() {
  return (
    <section className="load-section">
      <Logo animate={true} />
      <ConnectBtn />
    </section>
  );
}

export default Loading;
