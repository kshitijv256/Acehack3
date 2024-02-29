import React from "react";
import Collapsible from "../components/Collapsible";
import PrizeItem from "../components/PrizeItem";
import first from "/assets/images/prizes/first.png";
import second from "/assets/images/prizes/second.png";
import third from "/assets/images/prizes/third.png";
import ctf from "/assets/images/prizes/ctf-winner.png";
import box from "/assets/images/prizes/mystery-box.png";

const Prizes = () => {
  return (
    <div className="py-12 w-full bg-gradient-to-bl from-gray-900 via-purple-950 to-gray-900 relative z-20 text-white scroll-smooth">
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center mb-6">
          <h1 className="grad-text text-5xl font-bold">Prizes</h1>
        </div>
        <div className="text-center mb-10">
          <h1 className="text-[50px] md:text-[65px] font-bold">25,00,000+ INR</h1>
          <p className="text-[30px] md:text-[40px] font-[600]">Worth of Prize Pool</p>
        </div>
        <div className="flex flex-row flex-wrap mx-4 md:mx-10 gap-[75px] 2xl:gap-x-[7%] justify-center mt-10">
          <PrizeItem
            title="1st Prize"
            prize="₹ 30,000"
            color="text-amber-300"
            space="justify-end"
            image={
              <img
                className="w-40 h-40 top-[-80px] absolute rounded-full border-8 p-4 bg-slate-800 border-purple-500"
                src={first}
                alt="prize"
              />
            }
          />
          <PrizeItem
            title="2nd Prize"
            prize="₹ 20,000"
            color="text-emerald-300"
            space="justify-end"
            image={
              <img
                className="w-40 h-40 top-[-80px] absolute rounded-full border-8 p-4 bg-slate-800 border-purple-500"
                src={second}
                alt="prize"
              />
            }
          />
          <PrizeItem
            title="3rd Prize"
            prize="₹ 15,000"
            color="text-sky-300"
            space="justify-end"
            image={
              <img
                className="w-40 h-40 top-[-80px] absolute rounded-full border-8 p-4 bg-slate-800 border-purple-500"
                src={third}
                alt="prize"
              />
            }
          />
          {/* <PrizeItem
            title="Special prize for top Female participant"
            prize="₹ 10,000"
            color="text-pink-300"
          /> */}
          <PrizeItem
            color="text-purple-400"
            title="4th-10th Prize"
            prize="Swag Box"
            space="justify-end"
            image={
              <img
                className="w-40 h-40 top-[-80px] absolute rounded-full border-8 p-4 bg-slate-800 border-purple-500"
                src={box}
                alt="prize"
              />
            }
            
          />
          <PrizeItem
            color="text-purple-400"
            title=" Best CTF Winner"
            prize="10,000 INR"
            space="justify-end"
            image={
              <img
                className="w-40 h-40 top-[-80px] absolute rounded-full border-8 p-4 bg-slate-800 border-purple-500"
                src={ctf}
                alt="prize"
              />
            }
          />
        </div>
        {/* <div className="flex flex-col w-full items-center">
          <h2 className="text-4xl font-bold px-4 py-10 grad-text">
            Sponsor Track
          </h2>
          <div className="flex flex-row flex-wrap mx-4 md:mx-10 gap-4 justify-center">
            <PrizeItem
              color="text-violet-300"
              title="Best hack built on Ethereum + Polygon:"
              prize="$ 200"
            />
            <PrizeItem
              color="text-violet-300"
              title="Best hack built on Ethereum:"
              prize="$ 150"
            />
            <PrizeItem
              color="text-violet-300"
              title="Best use of Filecoin and/or IPFS:"
              prize="$ 250"
            />
            <PrizeItem
              color="text-violet-300"
              title="Winning Project deployed on Replit:"
              prize="$ 50"
            />
            <PrizeItem
              color="text-violet-300"
              title="Young Gun:"
              prize="$ 100"
            />
            <PrizeItem
              color="text-violet-300"
              title="Master Glasseater:"
              prize="$ 500"
            />
            <PrizeItem
              color="text-violet-300"
              title="Rising TecknoKing:"
              prize="$ 250"
            />
            <PrizeItem
              color="text-violet-300"
              title="Wolfram:"
              prize="$ 375*"
            />
            <PrizeItem
              color="text-violet-300"
              title="Beeceptor showcase:"
              prize="₹ 5000*"
            />
            <PrizeItem
              color="text-violet-300"
              prize="Balsamiq cloud 90 days free For all the attendees"
            />
            <PrizeItem
              color="text-violet-300"
              prize="echo3D 1 month premium free for all the attendees that cost $99 each."
            />
          </div>
        </div>
        <div className="w-4/5 flex flex-col items-end">
          <h1 className="text-2xl font-semibold mt-4 mb-2 text-gray-400">
            * Terms and conditions
          </h1>
          <Collapsible label="Beeceptor Instructions +" style="pl-6 text-right">
            <h1 className="text-xl font-semibold my-3">
              To participate in this award category you need to do the
              following:
            </h1>
            <div className="flex flex-col gap-1">
              <p>
                -{">"} Signup and use Beeceptor during the hackathon for
                building your hack or project.
              </p>
              <p>
                -{">"} Record a video with your voice explaining how it helped
                you and/or explaining a Beeceptor feature in good detail. You
                can add your project details as well to add some context on how
                you used it.
              </p>
              <p>
                -{">"} Your video should be 3-5 mins in length. It shouldn't
                exceed more than 5 mins. If you like, you can edit and enhance
                the video with more elements before uploading and make it
                showcase like other professional channels.
              </p>
              <p>
                -{">"} Upload the video to Youtube in your account, and add a
                good title, description, tags, etc. The video should be publicly
                available and searchable. (Do not upload as a private or private
                listing)
              </p>
              <p>
                -{">"} Fill in the form {"<given by organizers>"} to submit your
                entry for consideration. -{">"} The best video will be chosen as
                the winner and will be given a prize.
              </p>
            </div>
          </Collapsible>
          <Collapsible label="Wolfram Instructions +" style="pl-6 text-right">
            <div className="flex flex-col gap-1 my-3">
              <p>
                -{">"} Access to Wolfram|One for all your participants for
                thirty days. Access to Wolfram|One for all your participants for
                thirty days. Wolfram|One includes both Desktop and Cloud access,
                full access to the Wolfram Language and Knowledgebase, FreeCDF
                Deployment, 5000 Wolfram|Alpha API calls, 5000 Cloud Credits, 2
                installations per user and 2 GB of Cloud Storage. The value of
                this access is $25.00 per user.
              </p>
              <p>
                -{">"} The Wolfram Award for everyone on your top seven teams
                via award letter with a maximum of five individuals per team, or
                up to 35 individual participants. We would like for your
                organizing team to choose the winning students. Wolfram tech is
                not required to be used in projects for our award eligibility. I
                would send you the award letter as a .pdf attachment and you
                would need to email it to the winners.
              </p>
            </div>
          </Collapsible>
        </div> */}
      </div>
    </div>
  );
};

export default Prizes;
