import React from "react";
import Collapsible from "../components/Collapsible";

const Faq = () => {
  return (
    <div
      id="faq"
      className="relative scroll-smooth bg-[#19203a] w-full text-white p-10"
    >
      <div className="my-10 flex flex-col gap-4">
        <h1 className="text-4xl font-bold grad-text pl-1">FAQs</h1>
        <Collapsible style="bg-sky-900/50 rounded-md py-1 ml-2" label="What is a Hackathon?">
          <p>
            A hackathon is a design sprint-like event in which computer
            programmers and others involved in software development, including
            graphic designers, interface designers, project managers, domain
            experts, and others, collaborate intensively on software projects. A
            hackathon typically lasts between a day and a week.
          </p>
        </Collapsible>
        <Collapsible style="bg-sky-900/50 rounded-md py-1 ml-2" label="Do I Need To Pay Any Money To Register ?">
          <p>
            No. You do not have to pay anything to anyone to register yourself
            for AceHack2.0
          </p>
        </Collapsible>
        <Collapsible style="bg-sky-900/50 rounded-md py-1 ml-2" label="Who can apply ?">
          <p>
            Anyone(must be a college/School student) having a knack of solving
            real life problems can apply for the hackathon.
          </p>
        </Collapsible>
        <Collapsible style="bg-sky-900/50 rounded-md py-1 ml-2" label="What Is The Procedure Of Forming A Team ?">
          <p>
            Firstly make sure all teammates have registered on Devfolio. You can
            create your team from the devfolio dashboard.
          </p>
        </Collapsible>
        <Collapsible style="bg-sky-900/50 rounded-md py-1 ml-2" label="What will be the problem statements ?">
          <p>
            We will announce problem statements for each domain you need to
            solve along with your mentors when the hackathon starts.{" "}
          </p>
        </Collapsible>
        <Collapsible style="bg-sky-900/50 rounded-md py-1 ml-2" label="Will there be goodies and swag ?">
          <p>
            Yes, we will be providing goodies and swag to all the participants.
          </p>
        </Collapsible>
        <Collapsible style="bg-sky-900/50 rounded-md py-1 ml-2" label="What Can Be The Size Of The Team ?">
          <p>A team can consist of 2 to 4 members.</p>
        </Collapsible>
        <Collapsible style="bg-sky-900/50 rounded-md py-1 ml-2" label="What Is The Criteria For Selection Of A Team?">
          <p>
            If 75% members of a team have a decent profile, the team will get
            shortlisted. In a rare case where a team is not shortlisted, that
            team can contact us for the re-evaluation of their team.
          </p>
        </Collapsible>
        <Collapsible style="bg-sky-900/50 rounded-md py-1 ml-2" label="What about the travel ?">
          <p>
            We will provide a bus to the participants, from Badi chaupar, Chomu
            pulia and others too.
          </p>
        </Collapsible>
      </div>
    </div>
  );
};

export default Faq;
