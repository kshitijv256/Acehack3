import React from "react";
import { FaLink } from "react-icons/fa";
// import Member from "../components/Member";
import QrBox from "../components/QrBox";

import cp from "/assets/images/QR/community.svg";
import el from "/assets/images/QR/evangelist.svg";
import mj from "/assets/images/QR/mentor.svg";

const GetInvolved = () => {
  return (
    <div id="getInvolved" className="relative items-center justify-center bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 backdrop-blur-lg w-full z-20 py-10 scroll-smooth">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="flex flex-row justify-center w-full">
          <h1 className="font-bold text-5xl mb-10 text-white text-center">
            <span className="grad-text">Get Involved</span> !
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <QrBox
            image={cp}
            name="Call for Community & Media Partner"
            role={
                <a
                  href="https://lu.ma/acehack3-community"
                  className="text-2xl text-gray-400"
                  target={"_blank"}
                >
                  <FaLink />
                </a>
              }
            social={
                <a
                  href="https://lu.ma/acehack3-community"
                  className="text-sm mb-1 text-gray-400"
                  target={"_blank"}
                >
                  Click me
                </a>
              }
          />
          <QrBox
            image={el}
            name="Call for Evanglelist"
            role={
                <a
                  href="https://lu.ma/acehack3-evangelist"
                  className="text-2xl text-gray-400"
                  target={"_blank"}
                >
                  <FaLink />
                </a>
              }
            social={
                <a
                  href="https://lu.ma/acehack3-evangelist"
                  className="text-sm mb-1 text-gray-400"
                  target={"_blank"}
                >
                  Click me
                </a>
              }
          />
          <QrBox
            image={mj}
            name="Call for Judge/ Mentor"
            role={
                <a
                  href="https://lu.ma/acehack3-mentor"
                  className="text-2xl text-gray-400"
                  target={"_blank"}
                >
                  <FaLink />
                </a>
              }
            social={
                <a
                  href="https://lu.ma/acehack3-mentor"
                  className="text-sm mb-1 text-gray-400"
                  target={"_blank"}
                >
                  Click me
                </a>
              }
          />
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
