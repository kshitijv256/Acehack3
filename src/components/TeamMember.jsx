import React from "react";

const TeamMember = ({member}) => {
  return (
    <div className="w-[320px] h-36 m-6 bg-gray-900 group hover:bg-gradient-to-br from-cyan-700/30 to-gray-900 rounded-xl shadow-lg p-4 flex flex-col justify-between items-end z-30 relative">
      <div className="flex flex-row justify-between items-start">
        <div className="mr-8">
          <img
            className="object-center object-cover rounded-full h-24 w-24 group-hover:ring-cyan-600 ring-8 absolute top-[-20px] left-5"
            src={member.image}
            alt="photo"
          />
        </div>
        <div className="flex flex-col justify-start items-end text-end w-48 flex-wrap">
          <p className="text-xl text-white font-bold p-2">{member.name}</p>
          <p className="text-base sm:opacity-0 text-gray-400 font-normal md:group-hover:animate-fadeIn opacity-1 text-right mr-2">
            {member.role}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        {member.github}
        {member.linkedin}
      </div>
    </div>
  );
};

export default TeamMember;
