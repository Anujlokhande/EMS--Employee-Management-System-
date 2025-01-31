import React from "react";

export function NewTask({ data }) {
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
          <button className="text-sm bg-green-300 rounded-md p-3 mx-1 w-full flex justify-center">
            Accept Task
          </button>
        </div>
      </div>
    </>
  );
}
