import Image from "next/image";
import logoImg from "../assets/images/logo.jpg";

function Logo({ animate }) {
  return (
    <Image
      loading="eager"
      className={` object-contain aspect-square ${
        animate ? "animate-pulse w-44" : "w-20"
      }`}
      alt="..."
      src={logoImg}
    />
  );
}

export default Logo;
