import React from "react";

const TaskList = ({ data }) => {
  return (
    <div className="flex justify-between screen gap-5 mt-10 px-5">
      <div className="w-[45%] py-6 px-10 rounded-xl  bg-blue-400">
        <h2 className="text-2xl">{data.taskTypes.new}</h2>
        <h3 className="text-2xl font-medium">New Task</h3>
      </div>

      <div className="w-[45%] py-6 px-10 rounded-xl  bg-green-400">
        <h2 className="text-2xl">{data.taskTypes.completed}</h2>
        <h3 className="text-2xl font-medium">Completed Task</h3>
      </div>

      <div className="w-[45%] py-6 px-10 rounded-xl  bg-yellow-400">
        <h2 className="text-2xl">{data.taskTypes.active}</h2>
        <h3 className="text-2xl font-medium">Active Task</h3>
      </div>
      <div className="w-[45%] py-6 px-10 rounded-xl  bg-red-400">
        <h2 className="text-2xl">{data.taskTypes.failed}</h2>
        <h3 className="text-2xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskList;
