import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../Redux/authSlice.js";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  // const user = useSelector((state) => state.auth.user);

  const [myUser, setMyUser] = useState({
    name: "",
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

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/user", myUser);
      console.log(response);
      console.log(myUser);

      if (response.status === 201) {
        // user = response?.data;
        dispatch(login(response?.data))
        console.log("Registration Successful");

        // navigate('/chats')
      } else {
        console.log("Registration failed");
      }
    } catch (error) {
      console.log("Error register", error.message);
    }

    setMyUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="w-full sm:px-5">
      <form
        className="flex flex-col gap-y-4 items-center justify-center pt-2"
        onSubmit={handleRegister}
      >
        <div className="flex items-center justify-between sm:justify-none w-full gap-x-2">
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            name="name"
            value={myUser.name}
            onChange={handleFormChange}
            className="text-center border bg-transparent w-[65%] py-1"
          />
        </div>
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
        <div className="flex items-center justify-between sm:justify-none w-full gap-x-2 ">
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
          Register
        </button>
      </form>

    </div>
  );
}

export default Signup;
