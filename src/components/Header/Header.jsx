import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";

const Header = () => {
  const location = useLocation();
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 60); // تنظیم ارتفاع برای تغییر حالت فیکس
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Shop", path: "/shop" },
    { name: "Blog", path: "/blog" },
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <div
        className={`w-full m-auto max-w-[1440px] h-20 flex items-center justify-around overflow-hidden transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 bg-white shadow-md z-10" : "static"
        }`}
      >
        <img
          src={window.location.origin + "/images/logo.png"}
          alt=""
          className="my-2 max-w-[120px]"
        />
        <ul className="hidden md:flex md:items-center">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`relative mr-7 text-gray-700 cursor-pointer before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-gray-700 before:transition-all before:ease-in-out before:duration-300 hover:before:w-full ${
                location.pathname === item.path ? "before:w-full" : ""
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <IoHeartOutline size="1.3rem" className="mr-5 text-gray-700" />
          <FaRegUser size="1.3rem" className="mr-5 text-gray-700" />
          <BsCart2 size="1.3rem" className="mr-5 text-gray-700" />
        </div>
      </div>
      <div className="border-t-2 pt-2 md:hidden">
        <ul className="flex items-center justify-center">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`relative mx-3 text-gray-700 cursor-pointer before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-gray-700 before:transition-all before:ease-in-out before:duration-300 hover:before:w-full ${
                location.pathname === item.path ? "before:w-full" : ""
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
