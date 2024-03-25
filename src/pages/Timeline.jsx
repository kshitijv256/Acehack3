import React, { Fragment } from "react";

const Timeline = () => {
    const events = [
        //Day 1
        { direction: "right", time: "09:30 AM", heading: "Check-in" },
        { direction: "left", time: "11:00 AM", heading: "Opening Ceremony" },
        { direction: "right", time: "11:30 AM", heading: "Rajasthan Police Session" },
        { direction: "left", time: "12:00 PM", heading: "Hackathon starts" },
        { direction: "right", time: "01:30 PM", heading: "Lunch" },
        { direction: "left", time: "02:30 PM", heading: "Nordex Session" },
        { direction: "right", time: "03:30 PM", heading: "Orkes Session" },
        { direction: "left", time: "04:10 PM", heading: "Hackquest Session" },
        { direction: "right", time: "06:30 PM", heading: "Funzone opens" },
        { direction: "left", time: "08:30 PM", heading: "Dinner + Acehack3.0 unplugged" },
        { direction: "right", time: "11:30 PM", heading: "Tech Talk by Aryan Singh" },
        { direction: "left", time: "12:30 AM", heading: "Mentoring Round 1" },
        { direction: "right", time: "01:00 AM", heading: "Midnight Snacks" },
        { direction: "left", time: "01:30 AM", heading: "Game Zone" },
    ];
    const events2 = [
        // Day 2
        { direction: "right", time: "08:00 AM", heading: "Pulse Pump" },
        { direction: "left", time: "08:30 AM", heading: "Breakfast" },
        { direction: "right", time: "09:30 AM", heading: "Mentoring Round 2" },
        { direction: "left", time: "01:00 PM", heading: "Hackathon Submission (Devfolio)" },
        { direction: "right", time: "01:30 PM", heading: "Lunch" },
        { direction: "left", time: "02:30 PM", heading: "Judging Starts" },
        { direction: "right", time: "06:00 PM", heading: "Closing Ceremony" },
        { direction: "left", time: "07:00 PM", heading: "Bus (Return)" }
    ];

  return (
    <div className="z-20 relative bg-purple-300 flex flex-col gap-y-3 w-full  bg-gradient-to-bl from-gray-900 via-purple-950 to-purple-900  ">
      <div className="flex justify-center mt-20">
        <h1 className="grad-text text-5xl font-bold text-center">Hackathon Timeline</h1><br />
      </div>
      <div className="flex justify-center">
        <h1 className="grad-tex text-white text-3xl md:text-4xl mt-6 font-bold text-center">Day 01</h1><br />
      </div>
      <Circle />

      {events.map((event, key) => {
        return (
          <Fragment key={key}>
            <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center md:mx-auto mx-10">
              {event.direction === "left" ? (
                <EventCard time={event.time} heading={event.heading} />
              ) : (
                <div></div>
              )}
              <Pillar />
              {event.direction === "right" ? (
                <EventCard time={event.time} heading={event.heading} />
              ) : (
                <div></div>
              )}
            </div>
            {key < events.length - 1 && <Circle />}
          </Fragment>
        );
      })}
      <Circle />
      <div className="flex justify-center">
        <h1 className="grad-tex text-white text-3xl md:text-4xl -mt-2 font-bold text-center">Day 02</h1><br />
      </div>
      {events2.map((event, key) => {
        return (
          <Fragment key={key}>
            <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center md:mx-auto mx-10">
              {event.direction === "left" ? (
                <EventCard time={event.time} heading={event.heading} />
              ) : (
                <div></div>
              )}
              <Pillar />
              {event.direction === "right" ? (
                <EventCard time={event.time} heading={event.heading} />
              ) : (
                <div></div>
              )}
            </div>
            {key < events2.length - 1 && <Circle />}
          </Fragment>
        );
      })}
      <Circle />
      <div className="flex justify-center">
        <h1 className="grad-tex text-white text-3xl my-20 md:text-4xl -mt-2 font-bold text-center">Hackathon Over</h1><br />
      </div>
    </div>
  );
};

const Circle = () => {
  return <div className="rounded-full w-4 h-4 bg-violet-500 mx-auto"></div>;
};

const Pillar = () => {
  return (
    <div className=" rounded-t-full rounded-b-full w-1 h-full bg-violet-500 mx-auto "></div>
  );
};

const EventCard = ({ time, heading }) => {
  return (
    <div className="'transition duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col gap-y-2 bg-[#591c87] border-violet-500 border-4 hover:border-violet-300 hover:shadow-2xl shadow-md  rounded-lg  px-5 py-3 md:min-w-32 ">
      <div className="text-2xl md:text-3xl text-white  font-bold border-b">{time}</div>
      <div className="text-xl md:text-xl text-white">{heading}</div>
    </div>
  );
};

export default Timeline;
