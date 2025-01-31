import React, { useState } from "react";

const Header = (props) => {
  const [userName, setUserName] = useState("");
  // if (data) {
  //   setUserName(data.firstName);
  // } else {
  //   setUserName("Admin");
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };
  return (
    <>
      <div className="flex justify-between items-end p-10 screen bg-[#1c1c1c]">
        <h1 className="text-white font-medium text-2xl">
          Hello <br />{" "}
          <span className="text-3xl font-medium">userName 👋 </span>
        </h1>
        <button
          onClick={logOutUser}
          className="bg-red-600 font-medium text-white rounded-xl px-5 py-2"
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default Header;
