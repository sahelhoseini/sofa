import { useState } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Account = () => {
  const [editStatus, setEditStatus] = useState(false);
  const user = {
    name: "sahel",
    address: "tehran,enghelab, 18",
    phone: "0123456789",
    pass: "123Aa",
    email: "test@test.com",
    order: [],
    favorit: [],
  };

  const editOnClick = () => {
    setEditStatus(!editStatus);
  };
  return (
    <div className="flex flex-col relative h-full">
      {/* profile image */}
      <img
        src={window.location.origin + "/images/chair-1.png"}
        alt=""
        className="rounded-full md:w-2/3"
      />
      {/* full name */}
      <p className="font-bold md:text-xl mb-10">{user.name}</p>

      {/* user's address */}
      <div className="flex items-center mb-3">
        <FaLocationDot size="1rem" className="text-gray-950" />
        {editStatus ? (
          <input
            type="text"
            placeholder="enter your location ..."
            className="focus:outline-none rounded-md px-3 py-1 text-sm border-2 border-gray-950 ml-3 mb-1"
          />
        ) : (
          <p className=" md:text-xl ml-2">{user.address}</p>
        )}
      </div>
      {/* user's email */}
      <div className=" flex items-center mb-3">
        <MdEmail size="1rem" className=" text-gray-950" />
        {editStatus ? (
          <input
            type="email"
            placeholder="enter your email ..."
            className="focus:outline-none rounded-md px-3 py-1 text-sm border-2 border-gray-950 ml-3 my-1"
          />
        ) : (
          <p className=" md:text-xl ml-2">Email : {user.email}</p>
        )}
      </div>
      {/* user's phone */}
      <div className=" flex items-center mb-3">
        <FaPhone size="1rem" className=" text-gray-950" />
        {editStatus ? (
          <input
            type="number"
            placeholder="enter your phone ..."
            className="focus:outline-none rounded-md px-3 py-1  text-sm border-2 border-gray-950 ml-3 mt-1"
          />
        ) : (
          <p className=" md:text-xl ml-2">Phone : {user.phone}</p>
        )}
      </div>
      {/* buttons */}
      <div className="flex items-center gap-2 mt-10">
        <button className="border-2 border-gray-950 font-bold px-5 py-2 rounded-3xl hover:bg-gray-950 hover:text-white ">
          Log Out
        </button>
        <button
          className="border-2 border-gray-950 font-bold px-5 py-2 rounded-3xl hover:bg-gray-950 hover:text-white"
          onClick={editOnClick}
        >
          {editStatus ? "save Edit" : "Edit Info"}
        </button>
        {editStatus ? (
          <button
            className="border-2 border-gray-950 font-bold px-5 py-2 rounded-3xl hover:bg-gray-950 hover:text-white"
            onClick={() => setEditStatus(false)}
          >
            Cancel
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Account;
