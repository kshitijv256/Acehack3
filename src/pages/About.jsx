import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="pt-24 pb-12 bg-gradient-to-br from-violet-900 via-gray-900 to-gray-900 relative scroll-smooth w-full"
    >
      <div className="flex flex-col text-white text-center items-center">
        <h1 className="text-5xl font-bold pb-12 flex-wrap">
          <span className="grad-text">AceHack 3.0</span> Hackathon is here!
        </h1>
        <div className="text-[26px] text-justify flex flex-col gap-5 lg:px-56 px-5">
          <p>
            This year, be part of an extraordinary gathering of 1,000+
            innovators from around the nation. At AceHack 3.0, dive into a world
            of collaborative hacking, connect with industry-leading mentors, and
            build because you love to create. Experience riveting workshops,
            thrilling activities, and network with the most influential tech
            companies – it's an event you'll never forget. Coming from outside
            Jaipur? We've got you covered! Your food and lodging are on us,
            ensuring you focus solely on transforming your ideas into reality.
          </p>
        </div>
        <h2 className="text-4xl font-bold pt-12 pb-8 flex-wrap">
          <span className="grad-text">UEM JAIPUR ACM</span> STUDENT CHAPTER
        </h2>
        <div className="text-[26px] text-justify flex flex-col gap-5 lg:px-56 px-5">
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
