import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <div
        className={`overflow-hidden fixed w-full max-w-[1440px] h-20 flex items-center justify-around transition-all duration-300 top-0 left-1/2 transform -translate-x-1/2 bg-white z-10 ${
          isSticky ? "md:shadow-md" : null
        }`}
      >
        <div className="w-full flex items-center justify-between px-4">
          <Link to="/">
            <img
              src={`${window.location.origin}/images/logo.png`}
              alt="sofa"
              className="my-2 md:max-w-[120px] max-w-[90px]"
            />
          </Link>
          <ul className="hidden md:flex md:items-center">
            {navItems.map((item) => (
              <Link to={item.path}>
                <li
                  key={item.name}
                  className={`relative mr-7 text-gray-700 cursor-pointer before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-gray-700 before:transition-all before:ease-in-out before:duration-300 hover:before:w-full ${
                    location.pathname === item.path ? "before:w-full" : ""
                  }`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex items-center">
            <IoHeartOutline size="1.3rem" className="mr-5 text-gray-700" />
            <Link to="/profile">
              <FaRegUser size="1.3rem" className="mr-5 text-gray-700" />
            </Link>
            <BsCart2 size="1.3rem" className="mr-5 text-gray-700" />
          </div>
        </div>
      </div>
      <div
        className={`fixed w-full m-auto border-t-2 pt-2 md:hidden top-16 bg-white ${
          isSticky ? "shadow-md" : null
        } z-10 py-5`}
      >
        <ul className="flex items-center justify-center">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`relative mx-3 text-gray-700 cursor-pointer before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-gray-700 before:transition-all before:ease-in-out before:duration-300 hover:before:w-full text-sm ${
                location.pathname === item.path ? "before:w-full" : ""
              }`}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
