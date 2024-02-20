import React from "react";
import { FaArrowAltCircleDown, FaArrowRight, FaStar } from "react-icons/fa";
import Item from "../components/Item";

import prz1 from "/assets/images/prizes/ref_prize1.webp";
import prz2 from "/assets/images/prizes/ref_prize2.webp";
import prz3 from "/assets/images/prizes/ref_prize3.png";

const Referal = () => {
  return (
    <div
      id="referal"
      className="py-12 text-white z-20 relative bg-[#171f2c] w-full scroll-smooth"
    >
      <div className="flex justify-start pl-4 md:pl-20">
        <h1 className="text-4xl font-bold">Refer and Earn</h1>
      </div>
      <div className="flex flex-col items-start text-left text-xl pl-4 md:pl-20 gap-4 pt-6">
        <p className="flex items-center gap-2"><FaArrowRight/>
          If you cross 100+ registration from your referral link then you are
          eligible for the contest.
        </p>
        <p className="flex items-center gap-2"><FaArrowRight/>
          Go to your Hackathon Dashboard and you will get one referral link,
          share the link in your socials.
        </p>
        <p className="flex items-center gap-2"><FaArrowRight/>
          Depending on the registration and participation ratio winner will
          announce.
        </p>
        <p className="flex items-center gap-2"><FaArrowRight/>
          Share the referral link in your circle / professional network and
          encourage them to register for the event.
        </p>
        <div className="flex flex-row justify-center w-full flex-wrap">
          <Item img={prz1} text="Earbuds" />
          <Item img={prz2} text="Gaming mouse" />
          <Item img={prz3}text="Swags" />
        </div>
        <p className="text-lg text-gray-400 pt-10"><i># For the leaderboard Check our Instagram and Linkedin profiles.</i></p>
      </div>
    </div>
  );
};

export default Referal;
