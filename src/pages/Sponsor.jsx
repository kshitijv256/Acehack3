import React from "react";
import FancyButton from "../components/FancyButton";
import Icon from "../components/Icon";

import uem from "/assets/images/uem.png";
import acm from "/assets/images/acm.jpeg";
import iic from "/assets/images/iic.jfif";

import echo3D from "/assets/images/sponsors/echo3D.png";
import sticker_mule from "/assets/images/sponsors/sticker_mule.png";
import wolfram from "/assets/images/sponsors/Wolfram.jpg";
import devfolio from "/assets/images/sponsors/devfolio.png";
import replit from "/assets/images/sponsors/replit.png";
import polygon from "/assets/images/sponsors/polygon.png";
import solana from "/assets/images/sponsors/solana.svg";
import filecoin from "/assets/images/sponsors/filecoin.png";
import balsamiq from "/assets/images/sponsors/balsamiq.png";
import dapps from "/assets/images/sponsors/dapps.jpeg";
import beeseptor from "/assets/images/sponsors/beeseptor.svg";
import postman from "/assets/images/sponsors/postman.svg";
import rpLogo from "/assets/images/sponsors/rpLogo.jpg";

import codesquad from "/assets/images/community/codesquad.jpg";
import devStation from "/assets/images/community/dev_station.png";
import devorld from "/assets/images/community/devorld.png";
import zetapass from "/assets/images/community/zetapass.png";
import gfg_rtu from "/assets/images/community/gfg_rtu.png";
import hussky from "/assets/images/community/hussky.jpg";
import vmace from "/assets/images/community/vmace.jpg";
import skit from "/assets/images/community/skit.jpeg";
import cbs from "/assets/images/community/cbs.jpeg";
import poornima from "/assets/images/community/poornima.jpeg";

const Sponsor = () => {
  return (
    <div
      id="sponsor"
      className="py-16 text-white z-20 relative bg-gradient-to-bl from-gray-900 via-purple-950 to-gray-900 w-full scroll-smooth"
    >
      <div className="flex flex-col items-center text-center">
        {/* <h1 className="text-5xl font-bold pb-10">
          Our <span className="grad-text">Associate </span>Partners
        </h1>
        <div className="flex flex-row flex-wrap justify-center w-4/5">
          <Icon icon={rpLogo} height="h-28" />
          <Icon icon={uem} height="h-28" />
          <Icon icon={acm} height="h-28" />
          <Icon icon={iic} height="h-28" />
        </div>
        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Platinum</span> Sponsors
        </h1>
        <p>...Coming Soon</p>
        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Gold</span> Sponsors
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://devfolio.co/">
            <Icon icon={devfolio} height="h-28 px-4 py-6" />
          </a>
          <a href="https://nsb.dev/polygon-bounty" target={"_blank"}>
            <Icon icon={polygon} height="h-28 px-4 py-6" />
          </a>
        </div>
        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Silver</span> Sponsors
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://nsb.dev/solana-bounty" target={"_blank"}>
            <Icon icon={solana} height="h-24 px-4 py-6" />
          </a>
          <a href="https://nsb.dev/replit-bounty" target={"_blank"}>
            <Icon icon={replit} height="h-28 px-4 py-6" />
          </a>
          <a href="https://nsb.dev/filecoin-bounty" target={"_blank"}>
            <Icon icon={filecoin} height="h-28 px-4 py-6" />
          </a>
          <a href="https://maqtoob-testnet.dapps.co/" target={"_blank"}>
            <Icon icon={dapps} height="h-28 px-4 py-6 bg-white" />
          </a>
          <a href="https://www.postman.com/" target={"_blank"}>
            <Icon icon={postman} height="h-28 px-4 py-6" />
          </a>
        </div>
        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Bronze</span> Sponsors
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://beeceptor.com/" target={"_blank"}>
            <Icon icon={beeseptor} height="h-28 px-4 py-6" />
          </a>
        </div>
        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">In-Kind</span> Sponsors
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://www.echo3d.com/" target={"_blank"}>
            <Icon icon={echo3D} height="h-28" />
          </a>
          <a href="https://www.wolfram.com/language" target={"_blank"}>
            <Icon icon={wolfram} height="h-24 " />
          </a>
          <a href="https://mule.to/p3tf" target={"_blank"}>
            <Icon icon={sticker_mule} height="h-28" />
          </a>
          <a href="https://balsamiq.cloud/" target={"_blank"}>
            <Icon icon={balsamiq} height="h-28" />
          </a>
        </div>
        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Community</span> Partners
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center gap-4">
          <Icon icon={devStation} height="h-32" />
          <Icon icon={devorld} height="h-32" />
          <Icon icon={skit} height="h-32" />
          <Icon icon={gfg_rtu} height="h-32" />
          <Icon icon={hussky} height="h-32" />
          <Icon icon={codesquad} height="h-32" />
          <Icon icon={vmace} height="h-32" />
          <Icon icon={zetapass} height="h-32" />
          <Icon icon={cbs} height="h-32" />
          <Icon icon={poornima} height="h-32" />
        </div> */}
        <p className="text-4xl font-extrabold pt-10">
          Become a{" "}
          <span className="underline-offset-8 underline decoration-violet-400">
            sponsor
          </span>{" "}
          of <b className="grad-text"> AceHack 3.0</b>{" "}
        </p>
        <a
          href="https://drive.google.com/file/d/12N24ylkGhg1JWzCBL4uleQetM3OY3lJG/view?usp=sharing"
          target={"_blank"}
          className="mt-10 text-black"
        >
          <FancyButton data="Sponsor Us" />
        </a>
      </div>
    </div>
  );
};

export default Sponsor;
