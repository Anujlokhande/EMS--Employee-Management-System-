import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = (props) => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [newTask, setNewTask] = useState({});

  const formHandler = (e) => {
    e.preventDefault();
    setNewTask({
      title,
      description,
      date,
      category,
      active: false,
      completed: false,
      new: true,
      failed: false,
    });
    console.log(newTask);

    const data = userData;

    data.forEach((elem) => {
      if (assignTo == elem.firstName) {
        elem.taskTypes.new = elem.taskTypes.new + 1;
        elem.taskNumber = elem.taskNumber + 1;
        elem.tasks.push(newTask);
      }
    });

    setUserData(data);

    setTitle("");
    setDescription("");
    setDate("");
    setAssignTo("");
    setCategory("");
  };
  return (
    <div className="bg-[#000000] p-5 mt-7 rounded-xl mx-5">
      <form
        onSubmit={(e) => {
          formHandler(e);
          console.log("Prevented");
        }}
        className="flex flex-wrap items-start justify-between w-full text-white"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-1.5">Make Task</h3>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="w-4/5 rounded-md text-sm py-1 px-3 outline-none bg-transparent border-[1px] mb-2 "
              type="text"
              placeholder="Add Task"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1.5">Date</h3>
            <input
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              className="w-4/5 rounded-md text-sm text-white py-1 px-3 outline-none bg-transparent border-[1px] mb-2 "
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1.5">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              className="w-4/5 rounded-md text-sm py-1 px-3 outline-none bg-transparent border-[1px] mb-2 "
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="w-4/5 rounded-md text-sm py-1 px-3 outline-none bg-transparent border-[1px] mb-2 "
              type="text"
              placeholder="Type"
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col">
          <div className="w-4/5">
            <h3 className="text-sm text-gray-300 mb-2">Description</h3>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="w-full h-44 text-sm py-2 px-4 rounded-md outline-none border-[1px] bg-transparent"
              name=""
              id=""
            ></textarea>
          </div>

          <button className=" bg-emerald-400 py-3 px-2 rounded-md">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
