import React from "react";
import AcceptTask from "./AcceptTask";
import { CompleteTask } from "./CompleteTask";
import { NewTask } from "./NewTask";
import { Failed } from "./Failed";

const Task = ({ data }) => {
  console.log(data);
  return (
    <div
      id="task"
      className="h-[50%] overflow-x-auto  flex items-center justify-start flex-nowrap gap-5 mt-8 py-5 mx-4 rounded-xl"
    >
      {data.tasks.map((e, idx) => {
        if (e.active && e.new) {
          return <NewTask key={idx} data={e} />;
        } else {
          return <AcceptTask key={idx} data={e} />;
        }
        if (e.completed) {
          return <CompleteTask key={idx} data={e} />;
        }
        if (e.failed) {
          return <Failed key={idx} data={e} />;
        }
      })}
    </div>
  );
};

export default Task;
