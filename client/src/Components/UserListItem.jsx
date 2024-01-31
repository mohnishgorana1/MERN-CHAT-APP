
function UserListItem({user}) {
  return (
    <div className="flex items-center gap-8 py-2 px-2 hover:border ease-linear"
        // onClick={}
    >
        <img src={user.pic} alt="user avatar" className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border"/>
        <h1 className="text-md sm:text-lg font-sans font-semibold tracking-wider">{user.name}</h1>
    </div>
  )
}

export default UserListItem