import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="pt-24 pb-12 bg-gradient-to-br from-cyan-900 via-gray-900 to-gray-900 relative scroll-smooth w-full"
    >
      <div className="flex flex-col text-white text-center items-center">
        <h1 className="text-5xl font-bold pb-12 flex-wrap">
          <span className="grad-text">AceHack 3.0</span> Hackathon is here!
        </h1>
        <div className="text-[20px] text-justify flex flex-col gap-5 lg:px-56 px-5">
          <p>
            AceHack is a 24 hour hackathon, an initiative of{" "}
            <span className="underline-offset-8 underline decoration-cyan-300">
              UEM Jaipur ACM Student Chapter Innovate Elavet Transform
            </span>{" "} in assosiation with{" "}<span className="underline-offset-8 underline decoration-cyan-300">Eduhub Community.</span>  
            &nbsp; Which is being held in Jaipur, India. It is a 24 Hour Hackathon
            where participants will build projects to solve problems and compete with
            other participants and <strong> innovate for society.</strong>
          </p>
          <p>
            Our moto is to ignite new ideas from students that would alter and
            revolutionize the present-day situation in India. It will give
            students chance to showcase their innovative ideas and compete with
            their peers.
          </p>
          <p>
            <span className="underline-offset-8 underline decoration-cyan-300">
              AceHack 3.0
            </span>{" "}
            is an amalgamation of fun and learning where spectacular ideas will
            be displayed, and students will learn and feel inspired.
          </p>
          <p>
            Our 24-hour hackathon fosters an environment of teamwork and
            innovation, where students showcase their passion for technology,
            their creative drive, and their ingenious problem-solving skills.
          </p>
        </div>
        <h2 className="text-4xl font-bold pt-12 pb-8 flex-wrap">
          <span className="grad-text">UEM JAIPUR ACM</span> STUDENT CHAPTER
        </h2>
        <div className="text-[20px] text-justify flex flex-col gap-5 lg:px-56 px-5">
          <p>
            ACM, the world's largest educational and scientific computing
            society, delivers resources that advance computing as a science and
            a profession. ACM provides the computing field's premier Digital
            Library and serves its members and the computing profession with
            leading-edge publications, conferences, and career resources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
