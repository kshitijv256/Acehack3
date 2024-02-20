import React from "react";
import CountdownTimer from "../components/Timer";

const schedule = [
  ["2023-04-01T10:00:00", '10:00:00', "Check-In"],
  ["2023-04-01T12:00:00", "12:00:00", "Hackathon Begins!"],
  ["2023-04-01T13:00:00", "13:00:00", "Lunch"],
  ["2023-04-01T15:00:00", "15:00:00", "Workshop (Postman)"],
  ["2023-04-01T16:30:00", "16:30:00", "Mentoring Session"],
  ["2023-04-01T18:00:00", "18:00:00", "Snacks"],
  ["2023-04-01T21:30:00", "21:30:00", "Dinner"],
  ["2023-04-01T23:00:00", "23:00:00", "Mentoring Session"],
  ["2023-04-01T00:00:00", "00:00:00", "Fun Games + Coffee"],
  ["2023-04-02T09:00:00", "09:00:00", "Breakfast"],
  ["2023-04-02T09:00:00", "09:00:00", "Breakfast"],
  ["2023-04-02T11:00:00", "11:00:00", "Final Mentoring Session"],
  ["2023-04-02T12:40:00", "12:40:00", "Hack Ends!"],
  ["2023-04-02T15:00:00", "15:00:00", "Prizes + Closing Ceremony"],
]

const Live = () => {
  const [time, setTime] = React.useState(new Date());
  const [currentEvent, setCurrentEvent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    for (let i = 0; i < schedule.length; i++) {
      let d = new Date(schedule[i][0]).getTime();
      let t = time.getTime()
      if (t < d) {
        setCurrentEvent(i-1);
        break;
      }
    }
  }, [time]);
  return (
    <div
      id="live"
      className="py-12 bg-gray-900/30 relative scroll-smooth w-full"
    >
      <div className="flex flex-col md:flex-row text-lg text-white gap-10 mx-10 justify-between">
        <div className="flex flex-col items-start">
          <p>Hacking Ends In</p>
        <h1 className="font-semibold pb-12 grad-text">
          <CountdownTimer targetDate={new Date("2023-04-02T12:40:00")} />
        </h1>
          <p>Happening Now</p>
        <h1 className="text-5xl font-bold pt-2 pb-12 grad-text">
          {schedule[currentEvent][2]}
        </h1>
        <p>Next</p>
        <div className="flex flex-row items-center">
        <div className="text-5xl font-bold pt-2 pb-2 pr-4 grad-text border-0 md:border-r-2 border-gray-300">
          {schedule[currentEvent + 1][2]}
        </div>
        <div className="text-5xl font-semibold pt-2 pb-2 pl-4">
          {schedule[currentEvent + 1][1].slice(0, 5)}
        </div>
        </div>
        </div>
        <div className="w-full md:w-4/6">
        <iframe className="w-full h-[80vh]" allowfullscreen id="wallsio-iframe" src="https://my.walls.io/d6pfn?nobackground=1&show_header=0" loading="lazy" title="My social wall"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Live;
