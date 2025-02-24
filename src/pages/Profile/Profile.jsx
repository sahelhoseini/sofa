import { useState } from "react";
import Account from "../../components/ProfileComponent/Account/Account";
import Orders from "../../components/ProfileComponent/Orders/Orders";
import Favorit from "../../components/ProfileComponent/Favorit/Favorit";
import { ChangePass } from "../../components";

const Profile = () => {
  const [tabContent, setTabContent] = useState(1);
  const OnClickProfileTab = (value) => {
    setTabContent(value);
  };
  return (
    <>
      <div className="w-full max-w-[1440px] m-auto md:grid md:grid-cols-6 text-xs md:text-base px-5 md:px-20 lg:px-32 mt-32 h-[calc(85vh-8rem)] md:h-[calc(100vh-8rem)] flex flex-col overflow-hidden">
        {/* Sidebar */}
        <div className="md:col-span-1 flex flex-col text-center border-2 rounded-tl-3xl md:rounded-bl-3xl md:rounded-tr-none rounded-tr-3xl md:relative items-center justify-between p-2">
          <div className="hidden  absolute top-3 left-1 md:flex flex-col items-center">
            <img
              src={window.location.origin + "/images/chair-1.png"}
              alt=""
              className="rounded-full mt-3 w-2/3"
            />
            <p className="font-bold md:text-xl hidden md:block">
              sahel hoseini
            </p>
          </div>
          <div className="md:absolute md:bottom-0 flex md:flex-col w-full items-center md:items-stretch justify-center gap-x-3">
            <button
              className={`md:border-b-2 md:border-t-2 p-2 hover:bg-gray-950 hover:text-white ${
                tabContent === 1 ? "bg-gray-950 text-white" : null
              }`}
              onClick={() => OnClickProfileTab(1)}
            >
              Account
            </button>
            <button
              className={`md:border-b-2 p-2 hover:bg-gray-950 hover:text-white ${
                tabContent === 2 ? "bg-gray-950 text-white" : null
              }`}
              onClick={() => OnClickProfileTab(2)}
            >
              Orders
            </button>
            <button
              className={`md:border-b-2 p-2 hover:bg-gray-950 hover:text-white ${
                tabContent === 3 ? "bg-gray-950 text-white" : null
              }`}
              onClick={() => OnClickProfileTab(3)}
            >
              Favorit
            </button>
            <button
              className={`p-2 hover:bg-gray-950 hover:text-white md:hover:rounded-bl-3xl ${
                tabContent === 4 ? "bg-gray-950 text-white" : null
              }`}
              onClick={() => OnClickProfileTab(4)}
            >
              Change pass
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-5 p-4 border-2 md:rounded-tr-3xl rounded-br-3xl rounded-bl-3xl md:rounded-bl-none overflow-y-auto h-full">
          {tabContent === 1 ? (
            <Account />
          ) : tabContent === 2 ? (
            <Orders />
          ) : tabContent === 3 ? (
            <Favorit />
          ) : tabContent === 4 ? (
            <ChangePass />
          ) : (
            <p>another tab</p>
          )}
          {/* {[...Array(50)].map((_, i) => (
            <p key={i}>محتوای بیشتر برای تست اسکرول {i + 1}</p>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Profile;
