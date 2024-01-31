import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";
import { logout } from "../Redux/authSlice";
import { useNavigate } from "react-router-dom";
import UserListItem from "../Components/UserListItem";

function ChatPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(true);
  const user = useSelector((state) => state.auth.user);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchResultDrawer, setSearchResultDrawer] = useState(false);
  const [isSearchResultDrawerOpen, setIsSearchResultDrawerOpen] =
    useState(false);

  const handleLogout = async () => {
    dispatch(logout());
    navigate("/");
  };

  const handleUserSearch = async (e) => {
    e.preventDefault();
    console.log(searchKeyword);

    if (!searchKeyword) {
      // toast.error("Please Enter something to search");
      // setSearchResultDrawer(false);
      // setSearchKeyword("");
      // setSearchResult([]);
      return;
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const response = await axios.get(
        `/api/user?search=${searchKeyword}`,
        config
      );
      if (response.status === 200) {
        setSearchResult(response?.data);
        setSearchResultDrawer(true);
      } else {
        toast.error("Can't find any user for your search");
      }
      console.log("USERS Res", response);
      toast.success("User fetched Successfully");
    } catch (error) {
      console.log("SEARCH USER API ERROR!", error.message);
      toast.error("SEARCH USER API ERROR!");
    }
  };

  const abortSearch = async () => {
    setSearchResultDrawer(false);
    setSearchKeyword("");
    setSearchResult([]);
  };

  return (
    <main className="flex flex-col gap-5 items-center justify-center mt-5 mx-5 px-2 py-1  sm:border-none ">
      {/* header */}
      <div className="w-full sm:w-[60%] py-1 px-5 h-auto flex items-center justify-between  ">
        <h1 className="text-xl sm:text-3xl text-center font-bold cursor-pointer">
          Chat App
        </h1>
        <div className="flex gap-2">
          <div
            className="bg-black text-white border border-white px-5 py-1 font-semibold text-sm sm:text-md cursor-pointer hover:scale-105 duration-200 ease-linear"
            onClick={() => setIsProfileModalOpen(!isProfileModalOpen)}
          >
            Profile
          </div>
          <div
            className="hidden sm:flex bg-black text-white border border-white px-5 py-1 font-semibold text-sm sm:text-md cursor-pointer hover:scale-105 duration-200 ease-linear"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      </div>

      {!isProfileModalOpen ? (
        <div className="w-full sm:w-[60%] py-8 px-4 h-auto bg-base-200 relative flex flex-col items-center justify-center gap-3 ">
          <span
            className="border rounded-full text-lg hover:scale-110 p-2 absolute top-2 right-3 cursor-pointer"
            onClick={() => setIsProfileModalOpen(!isProfileModalOpen)}
          >
            <IoClose />
          </span>
          <img
            src={user.pic}
            alt="user image avatar"
            className="rounded-full w-[200px]"
          />
          <h1 className="font-semibold">{user.name}</h1>
          <h3 className="italic tracking-wider hover:underline">
            {user.email}
          </h3>
          <div
            className="bg-black text-white border border-white px-5 py-1 font-semibold text-sm sm:text-md cursor-pointer hover:scale-105 duration-200 ease-linear"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      ) : (
        <div className="w-full sm:w-[60%]  h-auto bg-zinc-900 relative flex flex-col  justify-center gap-3 ">
          <form
            className="flex items-center w-full mb-2"
            onSubmit={handleUserSearch}
          >
            <div className="w-[80%] flex items-center justify-evenly border border-primary bg-base-300">
              <input
                type="text"
                placeholder="Search User"
                className="w-[95%] text-center py-1 bg-transparent"
                value={searchKeyword}
                name="search"
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              <button
                className="py-1 bg-transparent font-bold"
                onClick={abortSearch}
              >
                <IoClose />
              </button>
            </div>
            <button
              className="w-[20%] py-1  border bg-white text-black font-semibold hover:scale-105 duration-200 ease-linear"
              type="submit"
            >
              Search
            </button>
          </form>
          {searchResultDrawer && (
            <div className="w-full  bg-zinc-900-300 h-auto">
              {searchResult.map((user, index) => {
                return <UserListItem key={index} user={user} />;
              })}
            </div>
          )}
          {/* ALL Chats */}
          <div></div>
        </div>
      )}
    </main>
  );
}

export default ChatPage;
