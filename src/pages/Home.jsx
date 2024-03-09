import React from "react";
// import AceHackLogo from "/assets/images/website-v2.svg";
import AceHackLogo from "/assets/images/acehack-nordek.svg";
import backgroundImage from "/assets/images/background-image.jpg";
import { ImLocation } from "react-icons/im";
import CountdownTimer from "../components/Timer";
import FancyButton from "../components/FancyButton";

import Icon from "../components/Icon";
import uem from "/assets/images/uem.png";
import acm from "/assets/images/acm.jpeg";
import rpLogo from "/assets/images/sponsors/rpLogo.jpg";
import { FaBus } from "react-icons/fa";

const Home = () => {
  // React.useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://apply.devfolio.co/v2/sdk.js";
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  const handleClick = () => {
    const element = document.getElementById("map");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      id="home"
      className="sticky min-h-[100vh]  md:top-[11vh] top-[0vh] z-0 pb-20 text-white scroll-smooth bg-gradient-to-r from-[#2E1065] to-fuchsia-900"
    >
      {/* <div className="bg-black/20"></div> */}
      <div className="flex flex-col justify-start items-center">
        {/* <div className="w-full flex flex-row justify-end mb-12 md:mb-0">
          <Icon icon={rpLogo} height={"h-16"} />
          <Icon icon={uem} height={"h-16"} />
          <Icon icon={acm} height={"h-16"} />
        </div> */}
        <img
          alt="AceHack Logo"
          className="lg:min-w-[30%] lg:w-[40%] lg:max-w-[80%] drop-shadow-xl mb-6 md:mb-0 md:mt-[2vh] mt-[30vw] w-[80%]"
          src={AceHackLogo}
        />
        <p className="md:text-4xl text-xl font-bold font-mono md:mt-5 text-center">Innovate - Elevate - Transform</p>
        <CountdownTimer targetDate={new Date("2024-04-06T00:10:00")} />
        <div className="flex flex-row flex-wrap w-full justify-center gap-4 mt-5 md:mt-0 mb-4 md:mb-0">
          {/* <div
            className="apply-button"
            data-hackathon-slug="acehack"
            data-button-theme="light"
            style={{ height: "44px", width: "312px" }}
          ></div> */}
          <div
            className="bg-violet-500 rounded-md hover:bg-violet-600"
            style={{ height: "44px", width: "312px" }}
          >
            <a
              href="https://acehack-3.devfolio.co/"
              className="flex h-full w-full justify-center items-center text-xl font-semibold"
              target={"_blank"}
            >
              <p>Apply with Devfolio &nbsp; </p>
            </a>
          </div>
          <div
            className="bg-gray-800 rounded-md hover:bg-black"
            style={{ height: "44px", width: "312px" }}
          >
            <a
              href="https://linktr.ee/acehack"
              className="flex h-full w-full justify-center items-center text-xl font-semibold"
              target={"_blank"}
            >
              <p>Join Our Community &nbsp; </p>
            </a>
          </div>
        </div>
        <h2 className="break-words text-center m- text-2xl flex-col items-center font-bold">
          {/* <p>
            {" "}
            &nbsp; April 6<sup>th</sup> and 7<sup>th</sup><br/><br/> @ University of
            Engineering and Management Jaipur
          </p> */}
          <h3 className="text-4xl m-4 mb-5 md:mb-3">
            April 6<sup>th</sup> - 7<sup>th</sup>
          </h3>
          <p className="mb-8 md:mb-4">
            @ University of Engineering & Management, Jaipur
          </p>
          <a
            target="_blank"
            href="https://www.google.com/maps/dir//University+of+Engineering+%26+Management+(UEM),+Jaipur+Gurukul,+Sikar+Road+Near+Udaipuria+Mod+Jaipur,+Rajasthan+303807/@27.2124649,75.7002425,12z/data=!4m6!4m5!1m0!1m2!1m1!1s0x396cffc30dacc2db:0xb78e5c340c935a95!3e0"
          >
            <FancyButton data="Get Direction !" />
          </a>
        </h2>
        {/* <div className="flex flex-row flex-wrap gap-4">
          <div className="font-semibold p-1 pr-4 text-lg flex flex-row items-center rounded-lg bg-emerald-400">
            <ImLocation className="w-10 fill-white" />
            <button onClick={handleClick}>How to reach ?</button>
          </div>
          <div className="flex flex-row items-center rounded-lg p-1 pr-4 bg-sky-500">
            <FaBus className="w-10 fill-white" />
            <a href="https://drive.google.com/file/d/1g51Q6F22HenukE7kNOyHUkDvk095h6RT/view?usp=sharing">
              <button>Bus Route</button>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
