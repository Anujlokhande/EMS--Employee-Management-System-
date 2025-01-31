import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const formHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    handleLogin(email, password);
    setEmail = "";
    setPassword = "";
  };
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-[#1c1c1c]">
        <div className=" border-2 border-emerald-400 rounded-xl p-20 ">
          <form
            onSubmit={(e) => {
              formHandler(e);
            }}
            className="flex flex-col items-center justify-center "
          >
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="text-white outline-none text-xl border-2 border-emerald-400 rounded-full bg-transparent py-3 px-4 placeholder:gray-400"
              type="email"
              placeholder="Enter Your Email"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="text-white outline-none text-xl border-2 border-emerald-400 rounded-full bg-transparent py-3 px-4 mt-3"
              type="password"
              placeholder="Enter Password"
            />
            <button className="border-none bg-emerald-500 rounded-full w-2/4 h-10  px-5 mt-3 text-center">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
