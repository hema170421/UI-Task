import React from "react";
import {
  MdSpaceDashboard,   
  MdOutlineCalendarMonth, 
  MdLibraryBooks,     
 MdOutlineClass,     
  MdMenuBook,         
 MdOutlineIntegrationInstructions, 
  MdAssignment,       
  MdChecklistRtl,     
  MdOutlineMessage, 
  MdHelpOutline,
  MdSettings,       
  MdLogout,       
} from "react-icons/md";

const firstMenu = [
  { name: "Dashboard", icon: <MdSpaceDashboard size={20} />, active: true },
  { name: "Calendar", icon: <MdOutlineCalendarMonth size={20} /> },
  { name: "Library", icon: <MdLibraryBooks size={20} /> },
  { name: "Classroom", icon: <MdOutlineClass size={20} /> },
  { name: "Courses", icon: <MdMenuBook size={20} /> },
  { name: "Integration", icon: <MdOutlineIntegrationInstructions size={20} /> },
  { name: "Assignments", icon: <MdAssignment size={20} /> },
  { name: "Attendance", icon: <MdChecklistRtl size={20} /> },
  { name: "Messages", icon: <MdOutlineMessage size={20} /> },
];

const secondMenu = [
  { name: "Help", icon: <MdHelpOutline size={20} /> },
  { name: "Settings", icon: <MdSettings size={20} /> },
  { name: "Logout", icon: <MdLogout size={20} /> },
];
const Sidebar = () => {
  return (
    <div className="absolute  left-5 w-60 h-[99vh] bg-white rounded-2xl shadow-lg p-4">
    <div>
     
      <div className="flex items-center gap-2 p-1 font-bold text-lg ">
        <span className="text-5xl ">🎓</span>
        <span className="text-gray-800 text-4xl">
          <span className="text-pink-700">E</span>Learn
        </span>
      </div>

     
      <div className="flex flex-col  ">
       
        <div className="mt-7">
          {firstMenu.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-4 px-2 py-1.5 cursor-pointer  mx-3 mt-1 
                ${
                  item.active
                    ? "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 font-semibold w-full"
                    : "text-blue-600 hover:bg-gray-100 hover:text-gray-500"
                }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="pb-6">
          {secondMenu.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 px-2 py-1.5 rounded-xl mx-3 my-1 text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};


   
 

export default Sidebar;
