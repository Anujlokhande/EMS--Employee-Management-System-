import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import Alltask from "../other/Alltask";

const AdminDashboard = (props) => {
  return (
    <>
      <div id="admin" className="h-screen w-full bg-[#1c1c1c]">
        <Header changeUser={props.changeUser} />
        <CreateTask />
        <Alltask />
      </div>
    </>
  );
};

export default AdminDashboard;
