import React from "react";
import meeting from "/assets/images/why/mentors-icon.png";
import briefcase from "/assets/images/why/briefcase-icon.png";
import food from "/assets/images/why/food-box-icon.png";
import people from "/assets/images/why/people-icon.png";
import project from "/assets/images/why/project-development-icon.png";

const Why = () => {
  return (
    <div className="py-12 w-full bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 relative z-20 text-white scroll-smooth">
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center">
          <h1 className="px-2  text-center text-5xl font-bold my-4">
            Why should you attend
            <span className="grad-text"> AceHack 3.0?</span>
          </h1>
        </div>
        <div className="flex flex-row w-[70%] flex-wrap justify-evenly text-sky-100/90">
          <div className="text-center w-80 flex flex-col items-center">
            <img src={meeting} alt="meeting" className="h-48 mt-10 mb-3" />
            <h1 className="text-xl font-semibold">
              Meet India’s biggest Tech Giants
            </h1>
          </div>
          <div className="text-center w-80 flex flex-col items-center">
            <img src={people} alt="meeting" className="h-48 mt-10 mb-3" />
            <h1 className="text-xl font-semibold">
              Connect with like-minded people
            </h1>
          </div>
          <div className="text-center w-80 flex flex-col items-center">
            <img src={project} alt="meeting" className="h-48 mt-10 mb-3" />
            <h1 className="text-xl font-semibold">
              Opportunities to work on a real life problem statement
            </h1>
          </div>
          <div className="text-center w-80 flex flex-col items-center">
            <img src={briefcase} alt="meeting" className="h-48 mt-10 mb-3" />
            <h1 className="text-xl font-semibold">Job Opportunities</h1>
          </div>
          <div className="text-center w-80 flex flex-col items-center">
            <img src={food} alt="meeting" className="h-48 mt-10 mb-3" />
            <h1 className="text-xl font-semibold">
              Get free food & fun environment
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
