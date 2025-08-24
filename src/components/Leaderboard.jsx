import React from "react";

const leaderboardData = [
  { id: 1, name: "Hema", score: 98, img: "https://i.pravatar.cc/40?img=1", color: "bg-green-100 border-l-4 border-green-500" },
  { id: 2, name: "Abdul", score: 92, img: "https://i.pravatar.cc/40?img=2", color: "bg-pink-100 border-l-4 border-pink-500" },
  { id: 3, name: "Lahari", score: 88, img: "https://i.pravatar.cc/40?img=3", color: "bg-blue-100 border-l-4 border-blue-500" },
  { id: 4, name: "Shankar", score: 82, img: "https://i.pravatar.cc/40?img=4", color: "bg-yellow-100 border-l-4 border-yellow-500" },
  { id: 5, name: "Nisha", score: 75, img: "https://i.pravatar.cc/40?img=5", color: "bg-purple-100 border-l-4 border-purple-500" },
  { id: 6, name: "Anand", score: 70, img: "https://i.pravatar.cc/40?img=6", color: "bg-red-100 border-l-4 border-red-500" },
];

function Leaderboard() {
  return (
    <div className="bg-white rounded-xl -mt-2.5 p-3 h-51 flex flex-col relative">
      <h2 className="font-semibold text-lg mb-2">Leader board</h2>

      <div className="space-y-1  overflow-y-auto scrollbar-thin pr-6">
        {leaderboardData.map((item) => (
          <div
            key={item.id}
            className={`flex items-center justify-between rounded-lg p-2 ${item.color}`}
          >
            <div className="flex items-center gap-2">
              <img
                src={item.img}
                alt={item.name}
                className="w-8 h-8 rounded-full border border-gray-300"
              />
              <span className="text-sm font-medium">{item.name}</span>
            </div>

            <span className="text-xs font-semibold text-gray-700">
              Score: {item.score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
