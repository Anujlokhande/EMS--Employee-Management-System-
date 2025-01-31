import React from "react";

export function CompleteTask(props) {
  return (
    <>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 mx-2 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded-md text-sm">High</h3>
          <h4>{data.date}</h4>
        </div>
        <h2 className="text-xl mt-5">{data.title}</h2>
        <p className="text-sm mt-3">{data.description}</p>
        <div className="flex justify-between mt-12">
          <button className="w-full bg-green-500">Completed</button>
        </div>
      </div>
    </>
  );
}
