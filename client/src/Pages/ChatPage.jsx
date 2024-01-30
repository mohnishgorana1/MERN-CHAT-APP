import React from "react";

function ChatPage() {
  return (
    <main className="flex flex-col gap-5 items-center justify-center m-5 px-2 py-5 border sm:border-none ">
      {/* header */}
      <div className="w-full sm:w-[60%]  py-4  flex items-center justify-between px-5 ">
        <h1 className="text-xl sm:text-3xl text-center font-bold cursor-pointer">
          Chat App
        </h1>
        <div className="bg-black text-white border border-white px-5 py-1 font-semibold text-sm sm:text-md">Profile</div>
      </div>

      {/* chats */}
      <div className="h-auto w-full">
        
      </div>
    </main>
  );
}

export default ChatPage;
