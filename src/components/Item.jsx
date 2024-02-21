import React from "react";

const Item = (props) => {
  return (
    <div className="flex flex-col items-center bg-[#8B5CF6] bg-gradient-to-r from-purple-500 to-purple-800 rounded-md hover:shadow-lg hover:shadow-violet-500 my-12 p-4 mx-5 h-60 w-60 md:shadow-none shadow-sky-600">
      <img
        src={props.img}
        alt="AceHack 1.0"
        className="scale-75 hover:transition duration-300 ease-in hover:scale-[80%]"
      />
      <h1 className="text-2xl font-bold py-4 my-4 text-purple-500 hover:text-purple-400 text-align-center">
        {props.text}
      </h1>
    </div>
  );
};

export default Item;
