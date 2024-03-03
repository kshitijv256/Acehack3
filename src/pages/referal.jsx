import React from "react";
import { FaArrowAltCircleDown, FaArrowRight, FaStar } from "react-icons/fa";
import Item from "../components/Item";

// import prz1 from "/assets/images/prizes/ref_prize1.webp";
// C:\Users\kumar\OneDrive\Desktop\AceHack3.O\Website\Acehack3\public\assets\images\why\tshirt.png
import prz1 from "/assets/images/why/tshirtbg.png";
import prz2 from "/assets/images/why/bottle.webp";
// import prz2 from "/assets/images/prizes/ref_prize2.webp";
import prz3 from "/assets/images/why/mug.webp";
// import prz3 from "/assets/images/prizes/ref_prize3.png";

const Referal = () => {
  return (
    <div
      id="referal"
      className="py-12 text-white z-20 relative bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 w-full scroll-smooth"
    >
      <div className="flex justify-start pl-4 md:pl-20">
        <h1 className="text-4xl font-bold">Refer and Earn</h1>
      </div>

      {/* evangelist program */}
      <div className="evangelist flex-col text-xl justify-start pl-4 md:pl-20 mt-5">
        <h1 className="text-3xl font-bold my-3">
          <span className="grad-text"># Evangelist</span> Program
        </h1>
        <div className="list">
          <ul className="list-disc ml-6 mr-10 md:mr-28 text-xl ">
            <li className="text-wrap text-justiy">
              ​​Gain Community Leadership Experience
            </li>
            <li className="text-wrap text-justiy">
              ​​Become the extended AceHack & EduhubTeam
            </li>
            <li className="text-wrap text-justiy">
              ​​Dedicated Hackathon Evangelist Mentorship
            </li>
            <li className="text-wrap text-justiy">
              ​​Certificate to all eligible Hackathon Evangelists
            </li>
            <li className="text-wrap text-justiy">
              ​​Shoutout on our socials for your contributions
            </li>
            <li className="text-wrap text-justiy">
              ​​Top Hackathon Evangelists receive recognition
            </li>
            <li className="text-wrap text-justiy">
              ​​Opportunity to get involved in the team for next season or this
              session as well and get a free trip to Hackathon.
            </li>
            <li className="text-wrap text-justiy">​Experience Certificate.</li>
            <li className="text-wrap text-justiy">
              ​80 registrations: 1 AceHack Exclusive T-shirt + Virtual
              Certificate.
            </li>
            <li className="text-wrap text-justiy">
              ​120 registrations: 1 AceHack Exclusive T-shirt + 1 AceHack
              Exclusive Mug + Virtual Certificate + Social Media ShoutOut.
            </li>
            <li className="text-wrap text-justiy">
              ​150 registrations: 1 AceHack Exclusive T-shirt + 1 AceHack
              Exclusive Mug + 1 Swag from our Sponsor (T-shirt/Bottle/ToteBag
              etc.) + Virtual Certificate + Social Media ShoutOut.
            </li>
            <li className="text-wrap text-justiy">
              ​200 registrations+ : Free Train Tickets to attend AceHack3.0 in
              Jaipur and Free Accommodation + Physical Certificate + 1 AceHack
              Exclusive T-shirt + Social Media ShoutOut.
            </li>
          </ul>
        </div>
      </div>

      {/* community partners */}

      <div className="community flex-col text-xl justify-start pl-4 md:pl-20 mt-10">
        <h1 className="text-3xl font-bold my-3">
          <span className="grad-text"># Community Partner</span> Program
        </h1>
        <div className="list">
          <ul className="list-disc ml-6 mr-10 md:mr-28 text-xl ">
            <li className="text-wrap text-justiy">
              ​​Cross-community collaboration
            </li>
            <li className="text-wrap text-justiy">
              ​​Receive speaker/mentor support for your event
            </li>
            <li className="text-wrap text-justiy">
              ​​Gain community growth mentorship
            </li>
            <li className="text-wrap text-justiy">
              ​​Gets to be part of weekly partner syncs
            </li>
            <li className="text-wrap text-justiy">
              ​​Feature on our socials and website
            </li>
            <li className="text-wrap text-justiy">​In-Person shout-out.</li>
            <li className="text-wrap text-justiy">​Experience Certificate.</li>
            <li className="text-wrap text-justiy">​Experience Certificate.</li>
            <li className="text-wrap text-justiy">
              ​100 registrations: 3 T shirts + 2 Mugs.
            </li>
            <li className="text-wrap text-justiy">
              ​​130 registrations: 3 T shirts + 2 Mugs + 2 Bottle
            </li>
            <li className="text-wrap text-justiy">
              ​220 registrations: Logo on Physical banners and all Social Media
              Posts + 3 Mugs + 5 T shirts + 3 Bottles
            </li>
            <li className="text-wrap text-justiy">
              ​300 registrations+ : 15 min session on your community + Logo on
              Physical banners and all Social Media Posts + 5 Mugs + 5 T shirts
              + 5 Bottles
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-start text-left text-xl pl-4 md:pl-20 gap-4 pt-6">
        {/* <p className="flex items-center gap-2 my-2">
          <FaArrowRight />
          If you cross 100+ registration from your referral link then you are
          eligible for the contest.
        </p>
        <p className="flex items-center gap-2 my-2">
          <FaArrowRight />
          Go to your Hackathon Dashboard and you will get one referral link,
          share the link in your socials.
        </p>
        <p className="flex items-center gap-2 my-2">
          <FaArrowRight />
          Depending on the registration and participation ratio winner will
          announce.
        </p>
        <p className="flex items-center gap-2 my-2">
          <FaArrowRight />
          Share the referral link in your circle / professional network and
          encourage them to register for the event.
        </p> */}
        <div className="flex flex-row justify-center w-full flex-wrap">
          <Item img={prz1} text="T-shirt" />
          <Item img={prz2} text="Bottle"/>
          <Item img={prz3} text="Mug" />
        </div>
        <p className="text-lg text-gray-400 pt-10">
          <i>
            # For the leaderboard Check our Instagram and Linkedin profiles.
          </i>
        </p>
      </div>
    </div>
  );
};

export default Referal;
