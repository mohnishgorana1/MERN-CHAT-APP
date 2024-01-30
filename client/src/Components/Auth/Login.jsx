import React from "react";

function Login() {

    
  return (
    <div className="w-full sm:px-5 ">
      <form className="flex flex-col gap-y-4 items-center justify-center pt-2">
        <div className="flex items-center justify-between sm:justify-none w-full gap-x-2">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            className="text-center border bg-transparent w-[65%] py-1"
          />
        </div>
        <div className="flex items-center justify-between sm:justify-none w-full gap-x-2">
          <label htmlFor="">Password</label>
          <input
            type="text"
            placeholder="Enter Password"
            className="text-center border bg-transparent w-[65%] py-1"
          />
        </div>
        <button
          type="submit"
          className="w-full px-10 mt-5 font-bold border py-2 text-blue-600 ease-in-out duration-150 hover:border-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
