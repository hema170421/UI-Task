import React from "react";

const Announcement = () => {
  return (
    <div className="bg-white rounded-xl p-2 mt-2">
     
      <h2 className="text-lg font-semibold  text-gray-800">Announcement</h2>

     
      <div className="bg-blue-100 rounded-lg flex justify-between items-center px-4 py-2">
        <span className="text-gray-700 font-medium">
          Hello Swetha, your live session is about to start!
        </span>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-2xl">
          Join
        </button>
      </div>
    </div>
  );
};

export default Announcement;
