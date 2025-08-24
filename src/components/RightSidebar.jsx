import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChalkboardTeacher, FaUserFriends, FaBookOpen } from "react-icons/fa";

function RightSidebar() {
  const events = [
    {
      icon: <FaChalkboardTeacher className="text-blue-600 w-4 h-4" />,
      bg: "bg-blue-100",
      title: "Presentation for Maths",
      subtitle: "Coming Soon",
    },
    {
      icon: <FaUserFriends className="text-green-600 w-4 h-4" />,
      bg: "bg-green-100",
      title: "Guest Lecture on Physics",
      subtitle: "Coming Soon",
    },
    {
      icon: <FaBookOpen className="text-pink-600 w-4 h-4" />,
      bg: "bg-pink-100",
      title: "English - Group Discussion",
      subtitle: "Coming Soon",
    },
  ];

  return (
    <div className="absolute  right-5 w-60 h-[99vh] bg-white rounded-2xl  p-4">
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefdAYZ6uy2rn4ODl9zSL1KwCAhiEPo9Xm-g&s"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">Swetha Shankar</p>
            <p className="text-sm text-gray-500">Student</p>
          </div>
        </div>
        <FaChevronDown className="text-gray-500" />
      </div>
      <div className="border-b-1"></div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg mt-10 mb-3">Upcoming Events</h2>
        <span className="text-sm text-gray-500 cursor-pointer mt-10 mb-3">See all</span>
      </div>

      <div className="space-y-9">
        {events.map((event, index) => (
          <div key={index} className="flex items-center gap-3">

            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${event.bg}`}
            >
              {event.icon}
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-800">
                {event.title}
              </p>
              <p className="text-xs text-gray-500">{event.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default RightSidebar;
