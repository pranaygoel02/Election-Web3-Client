import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useStateContext } from "../context/index";
import Image from "next/image";
import EC from '../assets/images/ec.jpg'

function index() {
  // const { contract, address, connect } = useStateContext();

  return <div className="">
    <div id="home" className="min-h-[80vh]">
      <h1 className=" text-6xl max-w-[50%] -mt-16 font-bold text-orange-500 text-center">Welcome to the Election Commission Portal</h1>
    </div>
    <div className="grid-cols-2 container py-8 grid gap-8 items-center">
    <Image  src={EC} className="rounded-lg h-72 object-cover"/>
    <p>The Election Commission is regarded as the guardian of elections in the country. In every election, it issues a Model Code of Conduct for political parties and candidates to conduct elections in a free and fair manner.</p>
    </div>
  </div>;
}

export default index;
