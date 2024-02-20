import React from "react";

const Item = (props) => {
  return (
    <div className="flex flex-col items-center bg-sky-600/40 rounded-md hover:shadow-lg hover:shadow-cyan-500 my-10 p-4 mx-5 h-60 w-60 md:shadow-none shadow-blue-600">
      <img src={props.img} alt="AceHack 1.0" className="scale-75 hover:transition duration-300 ease-in hover:scale-[80%]" />
      <h1 className="text-2xl font-bold py-4 my-4 text-blue-300">{props.text}</h1>
    </div>
  );
};

export default Item;
