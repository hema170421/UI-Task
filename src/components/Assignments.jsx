import React from "react";

const assignments = [
  { 
    id: 1, 
    subject: "Chemistry", 
    chapter: "Chapter 5", 
    type: "Daily task", 
    pages: "Page 11", 
    time: "11:00 AM", 
    status: "Pending" 
  },
  { 
    id: 2, 
    subject: "Physics", 
    chapter: "Chapter 3", 
    type: "Daily task", 
    pages: "Page 9", 
    time: "11:40 AM", 
    status: "Pending" 
  },
  { 
    id: 3, 
    subject: "Biology", 
    chapter: "Chapter 4", 
    type: "Daily task", 
    pages: "Page 12", 
    time: "10:00 AM", 
    status: "Completed" 
  },
];

const STATUS = {
  Pending: " text-yellow-500 ",
  Completed: " text-green-700 ",
};

function Assignments() {
  return (
    <div className="w-full rounded-xl bg-white -mt-3 p-2">
     
      <h2 className="font-semibold text-lg mb-2 ml-3">Assignments</h2>

      <ul className="space-y-1 ">
        {assignments.map((a) => (
          <li
            key={a.id}
            className="grid grid-cols-4 items-center bg-gray-100  p-0.5 rounded-md transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md  "
          >

            <div>
              <p className="font-medium text-gray-800 ml-3">{a.subject}</p>
              <p className="text-sm text-gray-500 ml-3">{a.chapter}</p>
            </div>

            <div>
              <p className="font-medium text-gray-700 ml-3">{a.type}</p>
              <p className="text-sm text-gray-500 ml-3">{a.pages}</p>
            </div>

            <div className="text-sm text-gray-600 font-medium ml-3">{a.time}</div>

            <div>
              <span
                className={`px-3 ml-5 py-1 rounded-full text-md font-semibold ${STATUS[a.status]}`}
              >
                {a.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignments;
