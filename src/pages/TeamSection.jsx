import React from "react";
import TeamMember from "../components/TeamMember";
import * as teamData from "../components/TeamData";

const TeamSection = () => {
  return (
    <div id="team" className="pt-24 w-full bg-[#1b1c44ad] backdrop-blur-lg relative z-20 scroll-smooth">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            Check our <span className="grad-text underline underline-offset-8 decoration-cyan-400">awesome</span> team
          </h1>
        </div>
        <div className="flex flex-row flex-wrap gap-2 justify-center">
          <TeamMember member={teamData.sahitya}/>
          <TeamMember member={teamData.amar}/>
          <TeamMember member={teamData.priya}/>
          <TeamMember member={teamData.kshitij}/>
          <TeamMember member={teamData.devdeep}/>
          <TeamMember member={teamData.aditya}/>
          <TeamMember member={teamData.sameer}/>
          <TeamMember member={teamData.swarnava}/>
          <TeamMember member={teamData.dipendu}/>
          <TeamMember member={teamData.aman}/>
          <TeamMember member={teamData.shanu}/>
          <TeamMember member={teamData.soumalya}/>
          <TeamMember member={teamData.rohit}/>
          <TeamMember member={teamData.indira}/>
          <TeamMember member={teamData.yash}/>
          <TeamMember member={teamData.ishika}/>
          <TeamMember member={teamData.andrila}/>
          <TeamMember member={teamData.ayushi}/>
          <TeamMember member={teamData.priyanshi}/>
          <TeamMember member={teamData.riya}/>
          <TeamMember member={teamData.tannu}/>
          <TeamMember member={teamData.sayantina}/>
          <TeamMember member={teamData.sacharini}/>
          <TeamMember member={teamData.preet}/>
          <TeamMember member={teamData.prabhat}/>
          <TeamMember member={teamData.adarsh}/>
          <TeamMember member={teamData.nadim}/>
          <TeamMember member={teamData.dev}/>
          <TeamMember member={teamData.purvesh}/>
          <TeamMember member={teamData.shubham}/>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;