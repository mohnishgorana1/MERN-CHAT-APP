function ChatListItems({ chat }) {
  return (
    <div
      className="flex items-center gap-8 py-2 px-4 hover:border ease-linear"
      // onClick={}
    >
      {chat.isGroupChat ? (
        <h1 className="text-md sm:text-lg font-sans font-semibold tracking-wider">
          {chat.chatName} {"(group)"}
        </h1>
      ) : (
        <h1 className="text-md sm:text-lg font-sans font-semibold tracking-wider">
          {chat.users[1].name}
        </h1>
      )}
    </div>
  );
}

export default ChatListItems;
