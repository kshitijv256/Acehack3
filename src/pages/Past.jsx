import React from "react";
import Features from "../components/Features";
import Pictures from "../components/Pictures";
import {
  FaUsers,
  FaUniversity,
  FaEnvelopeOpenText,
  FaCity,
} from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
import { IconContext } from "react-icons";

import pic1 from "/assets/images/acehack/1.jpg";
import pic2 from "/assets/images/acehack/2.jpg";
import pic3 from "/assets/images/acehack/3.jpeg";
import pic4 from "/assets/images/acehack/4.jpeg";
import pic5 from "/assets/images/acehack/5.jpeg";
import pic7 from "/assets/images/acehack/7.jpeg";

const Past = () => {
  return (
    <IconContext.Provider
      value={{
        style: { fontSize: "8rem", position: "relative", color: "black" },
      }}
    >
      <div
        id="past"
        className="pt-24 text-white z-20 relative bg-[#1b2b44] w-full py-10 h-fit scroll-smooth"
      >
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold pb-10 flex-wrap">
            <span className="grad-text">AceHack 2.0</span> Highlights!
          </h1>
          <div className="flex sm:flex-row justify-evenly w-full p-10 flex-col">
            <Features
              icon={<FaEnvelopeOpenText />}
              count="3000"
              text="Applications"
              color="sky"
            />
            <Features
              icon={<FaUsers />}
              count="660"
              text="Participants"
              color="emerald"
            />
            <Features
              icon={<FaUniversity />}
              count="40"
              text="Universities"
              color="sky"
            />
            <Features
              icon={<FaCity />}
              count="30"
              text="Cities"
              color="emerald"
            />
          </div>
          <h1 className="grad-text text-5xl font-bold py-6">Glimpses</h1>

          {/* <div className="relative w-full flex gap-6 justify-start overflow-x-auto py-10 scrollbar-hide snap-x"> */}

          <div className="flex md:flex-row flex-wrap flex-col justify-center w-[80%] py-4 my-4">
            <Pictures imgSrc={pic1} />
            <Pictures imgSrc={pic7} />
            {/* <Pictures imgSrc={"/assets/images/acehack/6.jpeg"}/> */}
            <Pictures imgSrc={pic3} />
            <Pictures imgSrc={pic4} />
            <Pictures imgSrc={pic5} />
            <Pictures imgSrc={pic2} />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Past;
