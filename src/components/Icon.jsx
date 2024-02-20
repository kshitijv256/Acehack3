import React from "react";

const Icon = ({ icon, height }) => {
    return (
        <div className="flex flex-col items-center mx-4 my-5 bg-gray-900">
            <img src={icon} className={height} />
        </div>
    );
};

export default Icon;