import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../../Redux/authSlice";
import { toast } from "react-hot-toast";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const user = useSelector((state) => state.auth.user);

  const [myUser, setMyUser] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setMyUser({
      ...myUser,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/user/login", myUser);
      console.log(response);
      console.log(myUser);

      if (response.status === 200) {
        // user = response?.data;
        dispatch(login(response?.data));
        localStorage.setItem('user', JSON.stringify(response?.data))
        console.log("Login Successful");
        toast.success("Login Successful");

        navigate('/chats')
      } else {
        console.log("Login failed");
        toast.error("Login failed");
      }
    } catch (error) {
      console.log("Error login", error.message);
      toast.error("Login failed API ERROR!");
    }

    setMyUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className="w-full sm:px-5 ">
      <form
        className="flex flex-col gap-y-4 items-center justify-center pt-2"
        onSubmit={handleLogin}
      >
        <div className="flex items-center justify-between sm:justify-none w-full gap-x-2">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={myUser.email}
            onChange={handleFormChange}
            className="text-center border bg-transparent w-[65%] py-1"
          />
        </div>
        <div className="flex items-center justify-between sm:justify-none w-full gap-x-2">
          <label htmlFor="">Password</label>
          <input
            type="text"
            placeholder="Enter Password"
            name="password"
            value={myUser.password}
            onChange={handleFormChange}
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
