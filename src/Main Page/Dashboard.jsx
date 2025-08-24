import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Leaderboard from "../components/Leaderboard";
import CompletionProgress from "../components/CompletionProgress";
import Assignments from "../components/Assignments";
import RightSidebar from "../components/RightSidebar";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      
      <div className="w-[1200px] h-[99vh] bg-white rounded-2xl shadow-lg flex overflow-hidden ">
        <Sidebar />
        <RightSidebar />

        {/* for middle section */}
        <div className="flex-1 flex flex-col bg-[#d4ecf5] overflow-hidden">
      
          <div className="p-5">
            <Navbar />
          </div>

          <div className="flex-1 px-60 mb-9 -mt-18 pb-3 space-y-4 ">
            <Announcement />
            <div className="grid grid-cols-2 gap-4">
              <Leaderboard />
              <CompletionProgress />
            </div>
            <Assignments />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;
