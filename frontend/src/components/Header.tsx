import React, { useState } from "react";
import { ImCart } from "react-icons/im";
import { FaSignInAlt } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdScreenSearchDesktop } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const user = {
    _id: "user1",
    role: "admin",
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProfileClick = () => {
    setIsDialogOpen(!isDialogOpen);
  };
 const logouthandler = ()=>{
  setIsDialogOpen(false)
 }
  return (
    <nav className="flex w-full h-16 gap-4 mt-3 mx-auto shadow-md p-6 justify-between items-center max-w-full">
      <div className="flex gap-x-6 ml-4 items-center justify-center">
        <Link to={"/"} className="flex gap-x-3 items-center justify-center hover:underline">
          Home <SiHomeassistantcommunitystore className="size-4" />
        </Link>
        <Link
          to={"/search"}
          className="flex gap-x-3 items-center justify-center hover:underline"
        >
          Search <MdScreenSearchDesktop className="size-6" />
        </Link>
        <Link to={"/cart"} className="flex gap-x-3 items-center justify-center hover:underline">
          Cart
          <ImCart className="size-6" />
        </Link>
      </div>
      <div className="relative flex gap-x-6 ml-4 items-center justify-center">
        {user?._id ? (
          <div>
            <button onClick={handleProfileClick}>
              <FaUserAlt className="size-6 cursor-pointer"/>
            </button>
            <dialog
              open={isDialogOpen}
              onClose={() => setIsDialogOpen(false)}
              className={`absolute top-full mt-2 bg-white rounded-md shadow-lg border border-gray-200 origin-top-right
                         right-0
                         sm:left-auto sm:right-0
                         md:left-auto md:right-0
                         lg:left-auto lg:right-0
                         xl:left-auto xl:right-0
                         w-48`} 
            >
              <div className="flex flex-col p-4 gap-y-2">
                {user.role === "admin" && (
                  <Link to={"/admin/dashboard"} className="block py-2 px-3 hover:bg-gray-100 rounded">Dashboard</Link>
                )}
                <Link to={"/orders"} className="block py-2 px-3 hover:bg-gray-100 rounded">Orders</Link>
                <button onClick={logouthandler} className="flex items-center gap-x-2 py-2 px-3 hover:bg-gray-100 rounded">
                  <FaSignOutAlt className="size-5"/> Logout
                </button>
              </div>
            </dialog>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="flex gap-x-3 items-center justify-center hover:underline"
          >
            Sign in
            <FaSignInAlt className="size-5" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;