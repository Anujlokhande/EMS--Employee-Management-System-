import React from "react";
import Header from "../other/Header";
import TaskList from "../other/TaskList";
import Task from "../Tasklist/Task";

const EmpDashbord = (props) => {
  return (
    <>
      <div className="bg-[#1c1c1c] h-screen">
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskList data={props.data} />
        <Task data={props.data} />
      </div>
    </>
  );
};

export default EmpDashbord;
