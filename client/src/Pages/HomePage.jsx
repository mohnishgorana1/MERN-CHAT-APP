import React from "react";
import Login from "../Components/Auth/Login";
import Signup from "../Components/Auth/Signup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [isLoginTab, setIsLoginTab] = useState("login");
  const navigate = useNavigate();

  function handleTab(text) {
    if (text === "login") {
      setIsLoginTab("login");
    } else {
      setIsLoginTab("register");
    }
  }
  return (
    <div className="flex flex-col gap-5 items-center justify-center m-5 px-3 py-5 ">
      <div className="w-full sm:w-[60%]  py-3">
        <h1
          className="text-xl sm:text-3xl text-center font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Chat App
        </h1>
      </div>
      <div className="w-full sm:w-[60%] flex flex-col  gap-y-4">
        <div className="flex items-center justify-between gap-2 mb-4">
          <button
            onClick={() => handleTab("login")}
            className="w-[50%] btn btn-md border-primary border-2 bg-transparent rounded-lg"
          >
            Login
          </button>
          <button
            onClick={() => handleTab("register")}
            className="w-[50%] btn btn-md border-primary border-2 bg-transparent rounded-lg"
          >
            Register
          </button>
        </div>

        <div className="w-full  h-auto">
          {isLoginTab === "login" ? <Login /> : <Signup />}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
