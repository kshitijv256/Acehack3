import React from "react";
import Item from "../components/Item";

import book from "/assets/images/themes/book.png";
import doctor from "/assets/images/themes/doctor.png";
import vr from "/assets/images/themes/vr.png";
import development from "/assets/images/themes/development.png";
import cloud from "/assets/images/themes/cloud.png";
import server from "/assets/images/themes/server.png";
import iot from "/assets/images/themes/iot.png";
import blockchain from "/assets/images/themes/blockchain.png";
import ml from "/assets/images/themes/ml.png";

const Themes = () => {
  return (
    <div id="themes" className="py-24 text-white z-20 relative bg-[rgba(0,16,41,1)] w-full scroll-smooth">
      <div className="flex justify-center my-2">
        <h1 className="grad-text text-5xl font-bold">Tracks</h1>
      </div>
      <div className="flex flex-col items-center mx-6">
        <div className="flex flex-row flex-wrap justify-evenly items-center w-full max-h lg:w-4/5">
          <Item img={blockchain} text="Blockchain" />
          <Item img={ml} text="AI and DATA" />
          <Item img={doctor} text="Healthcare" />
          <Item img={vr} text="AR / VR" />
          <Item img={development} text="Open Innovation" />
          <Item img={cloud} text="Cloud" />
          <Item img={server} text="Cyber Security" />
          <Item img={iot} text="Internet of Things" />
          <Item img={book} text="Education" />
        </div>
      </div>
    </div>
  );
};

export default Themes;
