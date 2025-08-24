import React from "react";

const progressData = [
  { id: 1, subject: "Organic Chemistry", chapter: "Chapter 1", progress: 80 },
  { id: 2, subject: "States of matter", chapter: "Chapter 2", progress: 60 },
  { id: 3, subject: "Solutions", chapter: "Chapter 3", progress: 40 },
  { id: 4, subject: "Chemical changes", chapter: "Chapter 4", progress: 20 },
];

function CompletionProgress() {
  return (
    <div className="bg-white rounded-xl -mt-2.5 p-4 h-51 flex flex-col">
      <h2 className="font-semibold text-lg mb-2">Completion progress</h2>
      <div className="space-y-3 overflow-y-auto scrollbar-thin pr-6">
        {progressData.map((item) => (
          <div key={item.id}>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-medium">{item.subject}</span>
              <span className="text-gray-500">{item.chapter}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${item.progress}` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompletionProgress;
