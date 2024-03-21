import React from "react";
import FancyButton from "../components/FancyButton";
import Icon from "../components/Icon";

import uem from "/assets/images/uem.png";
// import acm from "/assets/images/acm.jpeg";
import acm from "/assets/images/acmlogo.png";
import iic from "/assets/images/iic.jfif";
import eduhub from "/assets/images/eduhub.png";
// /workspaces/Acehack3/public/assets/images/eduhub.png

import echo3D from "/assets/images/sponsors/echo3D.png";
import sticker_mule from "/assets/images/sponsors/sticker_mule.png";
import wolfram from "/assets/images/sponsors/Wolfram.jpg";
import devfolio from "/assets/images/newSponsors/devfolio.svg";
import rj from "/assets/images/newSponsors/rj.png";
// import devfolio from "/assets/images/sponsors/devfolio.png";
import replit from "/assets/images/sponsors/replit.png";

import nordek from "/assets/images/newSponsors/Nordek.svg";
import polygon from "/assets/images/newSponsors/polygon-logo.svg";
import archway from "/assets/images/newSponsors/archway.png";
import aptos from "/assets/images/newSponsors/aptos.svg";
import stellar from "/assets/images/newSponsors/stellar.svg";
import nordekgenesis from "/assets/images/newSponsors/NordekGenesis.png";
// import polygon from "/assets/images/sponsors/polygon.png";

import taskade from "/assets/images/newSponsors/taskade.svg";
import bobbleai from "/assets/images/newSponsors/bobble-ai.png";
import iba from "/assets/images/newSponsors/iba.png";
import quillaudit from "/assets/images/newSponsors/quillaudit.png";
// import quillaudit from "/assets/images/newSponsors/QuillAudit.webp";

import orkes from "/assets/images/newSponsors/orkes.svg";
import hackquest from "/assets/images/newSponsors/hackquest.webp";
import jumbo from "/assets/images/newSponsors/jumbo.svg";
// import hackquest from "assets/images/newSponsors/hackquest.webp";

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
      className="py-16 text-white z-20 relative bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 w-full scroll-smooth"
    >
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold pb-10">
          <span className="grad-text">Organized </span>By
        </h1>
        {/* <h1 className="text-5xl font-bold pb-10">
          Our <span className="grad-text">Associate </span>Partners
        </h1> */}
        <div className="flex flex-row flex-wrap justify-center w-4/5">
          {/* <Icon icon={rpLogo} height="h-28" /> */}
          {/* <Icon icon={uem} height="h-28" /> */}

          <a href="https://uem.edu.in/uem-jaipur/" target={"_blank"}>
            <Icon icon={uem} height="h-28 bg-white px-3 py-1" />
          </a>
          <a href="https://acm-jaipur.uem.edu.in/" target={"_blank"}>
            <Icon icon={acm} height="h-28 bg-white px-2" />
          </a>
          {/* <Icon icon={acm} height="h-28" /> */}
          <Icon icon={iic} height="h-28 p-2 bg-white" />
          {/* <Icon icon={eduhub} height="h-28" /> */}
          <a href="https://eduhubcommunity.tech/" target={"_blank"}>
            <Icon icon={eduhub} height="h-28 bg-white px-2" />
          </a>
          {/* <Icon icon={iba} height="h-28 bg-white" /> */}
          <a href="https://indiablockchainalliance.org/" target={"_blank"}>
            <Icon icon={iba} height="h-28 bg-white" />
          </a>
          <a href="https://indiablockchainalliance.org/" target={"_blank"}>
            <Icon icon={rj} height="h-28 p-2 bg-white" />
          </a>
        </div>

        {/*Powered by Nordek */}

        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Powered</span> By
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://www.nordek.io/" target={"_blank"}>
            <Icon icon={nordek} height="h-28 py-5 px-8" />
          </a>
        </div>

        {/* Platinum Sponsors */}
        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Platinum</span> Sponsors
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://orkes.io/" target={"_blank"}>
            <Icon icon={orkes} height="h-28 px-10 py-4 bg-white" />
          </a>
          {/* <a href="https://nsb.dev/polygon-bounty" target={"_blank"}>
            <Icon icon={polygon} height="h-28 px-4 py-6" />
          </a> */}
          {/* <a href="https://nsb.dev/polygon-bounty" target={"_blank"}>
            <Icon icon={polygon} height="h-28 px-4 py-6" />
          </a> */}
        </div>

        {/* Gold Sponsors */}
        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Gold</span> Sponsors
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://bobble.ai/en/home" target={"_blank"}>
            <Icon icon={bobbleai} height="h-28 px-10 py-4 bg-white" />
          </a>
          <a href="https://www.hackquest.io/" target={"_blank"}>
            <Icon icon={hackquest} height="h-28 px-6 py-10 bg-black " />
          </a>
          {/* <a href="https://nsb.dev/polygon-bounty" target={"_blank"}>
            <Icon icon={polygon} height="h-28 px-4 py-6" />
          </a> */}
        </div>

        {/* Silver Sponsors */}
        
        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Silver</span> Sponsors
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          {/* <a href="https://nsb.dev/solana-bounty" target={"_blank"}>
            <Icon icon={solana} height="h-24 px-4 py-6" />
          </a> */}
          <a href="https://nsb.dev/replit-bounty" target={"_blank"}>
            <Icon icon={replit} height="h-28 px-10 py-6" />
          </a>
          <a href="https://jumbochain.org/" target={"_blank"}>
            <Icon icon={jumbo} height="h-28 px-4 py-6" data="Jumbo Blockchain"/>
          </a>
          {/* <a href="https://maqtoob-testnet.dapps.co/" target={"_blank"}>
            <Icon icon={dapps} height="h-28 px-4 py-6 bg-white" />
          </a> */}
          <a href="https://www.taskade.com/" target={"_blank"}>
            <Icon icon={taskade} height="h-28 px-6 py-6" />
          </a>
          {/* <a href="https://www.postman.com/" target={"_blank"}>
            <Icon icon={postman} height="h-28 px-4 py-6" />
          </a> */}
        </div>

        {/* Bronze Sponsors */}

        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Bronze</span> Sponsors
        </h1>
        <p>...Coming Soon</p>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          {/* <a href="https://beeceptor.com/" target={"_blank"}>
            <Icon icon={beeseptor} height="h-28 px-4 py-6" />
          </a> */}
        </div>

        {/* Inkind sponsors */}

        {/* <h1 className="text-5xl font-bold py-10 ">
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
        </div> */}

        {/* Web3 Security Partner */}

        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Web3</span> Security Partner
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://www.quillaudits.com/" target={"_blank"}>
            <Icon icon={quillaudit} height="h-28" />
          </a>
        </div>

        {/*Platform Sponsor */}

        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Platform</span> Sponsor
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://devfolio.co/discover" target={"_blank"}>
            <Icon icon={devfolio} height="h-28 p-5" />
          </a>
        </div>

                    {/* Web3 Track Sponsor */}

        <h1 className="text-5xl font-bold py-10 ">
          <span className="grad-text">Web3</span> Track Sponsors
        </h1>
        <div className="flex flex-row flex-wrap w-4/5 justify-center items-center">
          <a href="https://polygon.technology/" target={"_blank"}>
            <Icon icon={polygon} height="h-28 bg-bl py-2 px-8" />
          </a>
          <a href="https://archway.io/" target={"_blank"}>
            <Icon icon={archway} height="h-28" />
          </a>
          <a href="https://aptosfoundation.org/" target={"_blank"}>
            <Icon icon={aptos} height="h-28 bg-white px-5" />
          </a>
          <a href="https://stellar.org/" target={"_blank"}>
            <Icon icon={stellar} height="h-28 bg-white px-5 py-5" />
          </a>
          <a href="https://www.nordek.io/nordek-genesis" target={"_blank"}>
            <Icon icon={nordekgenesis} height="h-28 bg-black" />
          </a>
        </div>

        {/* Community Partners */}
        {/* <h1 className="text-5xl font-bold py-10 ">
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
          href="https://drive.google.com/file/d/1cADr4eSoVO1U_LuxpLPtPBiwggaeDLcG/view?usp=sharing"
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
