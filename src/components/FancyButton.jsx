import React from "react";

const FancyButton = (props) => {
  const handleClickScroll = () => {
    const element = document.getElementById(props.id);
    if (props.id === "home") {
      document.documentElement.scroll({ top: 0, behavior: "smooth" });
    } else if (props.id === "register") {
      window.open("https://acehack.devfolio.co/", "_blank");
    } else if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      className="hover:translate-x-1 hover:translate-y-1 hover:shadow-none uppercase bg-cyan-400 font-semibold text-xl whitespace-nowrap py-2 px-4 rounded-sm cursor-pointer button-shadow"
      onClick={handleClickScroll}
    >
      {props.data}
    </button>
  );
};

export default FancyButton;
