import React from "react";

const Features = (props) => {
  if (props.color === "blue") {
    return (
      <div className="flex flex-col items-center">
        <div className="rounded-[50%] bg-blue-400/80 p-4 m-3 ring-[6px] ring-blue-700 hover:bg-blue-300">
          <svg className="h-32 w-32 scale-75 hover:transition duration-200 hover:scale-[80%]">{props.icon}</svg>
        </div>
        <p className="my-2 font-bold text-4xl text-blue-400">{props.count}+</p>
        <p className="font-semibold text-blue-400 text-xl">{props.text}</p>
      </div>
    );
  } else if (props.color === "emerald") {
    return (
      <div className="flex flex-col items-center">
        <div className="rounded-[50%] bg-emerald-400/80 p-4 m-3 ring-[6px] ring-emerald-600 hover:bg-emerald-300">
          <svg className="h-32 w-32 scale-75 hover:transition duration-200 hover:scale-[80%]">{props.icon}</svg>
        </div>
        <p className="my-2 font-bold text-4xl text-emerald-300">{props.count}+</p>
        <p className="font-semibold text-emerald-300 text-xl">{props.text}</p>
      </div>
    );
  }
}

export default Features;