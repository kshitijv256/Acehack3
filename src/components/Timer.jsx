import React from "react";
import { useEffect, useState } from "react";

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className="px-2 flex flex-col items-center">
      <p className="font-extrabold text-violet-400 text-5xl">{value}</p>
      <span>{type}</span>
    </div>
  );
};

const ExpiredNotice = () => {
  return (
    <div className="font-extrabold text-sky-400 text-5xl py-6">
      <p>Coming Soon!</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="">
      <div className="flex flex-row items-baseline py-6 text-xl">
        <DateTimeDisplay value={days} type={"Days"} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Hours"} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Mins"} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
