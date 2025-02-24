import { useState } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FiEdit2, FiLogOut, FiSave, FiX } from "react-icons/fi";

const Account = () => {
  const [editStatus, setEditStatus] = useState(false);
  const [user, setUser] = useState({
    name: "Sahel",
    address: "Tehran, Enghelab, 18",
    phone: "0123456789",
    email: "test@test.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const editOnClick = () => {
    setEditStatus(!editStatus);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <img
          src={window.location.origin + "/images/chair-1.png"}
          alt="Profile"
          className="rounded-full w-32 h-32 border-4 border-gray-300 shadow-md"
        />
        <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
      </div>

      {/* User Info */}
      <div className="mt-6 space-y-4">
        {/* Address */}
        <div className="flex items-center gap-3 border-b pb-3">
          <FaLocationDot className="text-gray-400" size="1.5rem" />
          {editStatus ? (
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your address..."
            />
          ) : (
            <p className="text-gray-700">{user.address}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 border-b pb-3">
          <MdEmail className="text-gray-400" size="1.5rem" />
          {editStatus ? (
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email..."
            />
          ) : (
            <p className="text-gray-700">{user.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 border-b pb-3">
          <FaPhone className="text-gray-400" size="1.5rem" />
          {editStatus ? (
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number..."
            />
          ) : (
            <p className="text-gray-700">{user.phone}</p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button className="flex items-center gap-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
          <FiLogOut />
          Log Out
        </button>

        <button
          onClick={editOnClick}
          className="flex items-center gap-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {editStatus ? (
            <>
              <FiSave /> Save
            </>
          ) : (
            <>
              <FiEdit2 /> Edit Info
            </>
          )}
        </button>

        {editStatus && (
          <button
            onClick={() => setEditStatus(false)}
            className="flex items-center gap-1 bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
          >
            <FiX />
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default Account;
