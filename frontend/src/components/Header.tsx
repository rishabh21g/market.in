import React from "react";
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
  return (
    <nav className="flex w-full h-16 gap-4 mt-3 mx-auto  shadow-md p-6">
      <Link to={"/"} className="flex gap-x-3 items-center justify-center">
        Home <SiHomeassistantcommunitystore className="size-4" />
      </Link>
      <Link to={"/search"} className="flex gap-x-3 items-center justify-center">
        Search <MdScreenSearchDesktop className="size-6" />
      </Link>
      <Link to={"/cart"} className="flex gap-x-3 items-center justify-center">
        Cart
        <ImCart className="size-6" />
      </Link>
      {user?._id ? (
        <div>
          <Link
            to={"/login"}
            className="flex gap-x-3 items-center justify-center"
          >
            Sign In
            <FaSignInAlt className="size-5" />
          </Link>
          <dialog>
            <div>
              {user.role === "admin" && (
                <Link to={"/admin/dashboard"}>Admin</Link>
              )}
              <Link to={"/orders"}> My orders</Link>
              <Link
                to={"/login"}
                className="flex gap-x-3 items-center justify-center"
              >
                Sign In
                <FaUserAlt className="size-5" />
              </Link>
            </div>
          </dialog>
        </div>
      ) : (
        <Link
          to={"/login"}
          className="flex gap-x-3 items-center justify-center"
        >
          Sign out
          <FaSignOutAlt className="size-5" />
        </Link>
      )}
    </nav>
  );
};

export default Header;
