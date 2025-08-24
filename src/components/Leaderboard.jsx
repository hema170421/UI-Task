import React from "react";

const leaderboardData = [
  { id: 1, name: "Nisha Ankur", score: 98, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT44Osut7lvh-JcO3267T48aPfYQ2MMJWBMCQ&s", color: "bg-green-100 border-l-4 border-green-500" },
  { id: 2, name: "Shyam Nithin", score: 92, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQLwDqDwd2JfzifvfBTFT8I7iKFFevcedYg&s", color: "bg-pink-100 border-l-4 border-pink-500" },
  { id: 3, name: "Dinesh Kumar", score: 88, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQLwDqDwd2JfzifvfBTFT8I7iKFFevcedYg&s", color: "bg-blue-100 border-l-4 border-blue-500" },
  { id: 4, name: "Radha Shankar", score: 82, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIyTZVXyb90oYHRiiX6YkNUc0CnzGwWjI3Q&s", color: "bg-yellow-100 border-l-4 border-yellow-500" },
  { id: 5, name: "Naveen Kumar", score: 75, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKxfjTf49GAtu0PpFXK7mKBgqyJ5MfJCgQw&s", color: "bg-purple-100 border-l-4 border-purple-500" },
  { id: 6, name: "Anand vardhan", score: 70, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNm6BkgT87_Fus1KSC2Bti9okSzIM0kOd5Pw&s", color: "bg-red-100 border-l-4 border-red-500" },
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
                className="w-9 h-8 rounded-full border border-gray-300"
              />
              <span className="text-sm font-medium">{item.name}</span>
            </div>

            <span className="text-md font-semibold text-gray-700">
              Score: {item.score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
