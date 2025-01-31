import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Alltask = (props) => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] text-white p-5 mt-4 rounded-md  ">
      <div className="flex justify-between items-center px-4 py-2 mb-3 rounded-md bg-emerald-400">
        <h3 className="w-1/5 ">Name</h3>
        <h3 className="w-1/5 ">Task</h3>
        <h3 className="w-1/5 ">Active Task</h3>
        <h3 className="w-1/5 ">Completed</h3>
        <h3 className="w-1/5 ">Failed</h3>
      </div>
      <div className="overflow-auto" id="task">
        {userData.map((e, idx) => {
          return (
            <div
              className="w-full border-[1px] border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded-md "
              key={idx}
            >
              <h3 className="w-1/5 ">{e.firstName}</h3>
              <h3 className="w-1/5 text-blue-500">{e.taskNumber}</h3>
              <h3 className="w-1/5 text-green-500">{e.taskTypes.active}</h3>
              <h3 className="w-1/5 text-yellow-400">{e.taskTypes.completed}</h3>
              <h3 className="w-1/5 text-red-500">{e.taskTypes.failed}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Alltask;
