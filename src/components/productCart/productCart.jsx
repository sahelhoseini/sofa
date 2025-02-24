import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductCart = ({ image, name, price }) => {
  const [basketIcon, setBasketIcon] = useState(false);
  const OnClickBasketIcon = () => {
    setBasketIcon(!basketIcon);
  };
  console.log(basketIcon);
  // const OnClickCloseBasket = () => {
  //   setBasketIcon(!basketIcon);
  // };
  return (
    <div className="relative md:col-span-3 col-span-4 group m-1 md:m-3 border rounded-xl md:rounded-3xl">
      <Link to="/product">
        <img
          src={window.location.origin + `/images/${image}`}
          alt="Product"
          className="rounded-t-xl md:rounded-t-3xl group-hover:opacity-75 transition-opacity duration-300"
        />
        <div className="p-3">
          <p className="font-semibold text-xs md:text-lg">{name}</p>
          <p className="text-xs md:text-lg">${price}</p>
        </div>

        <div className="absolute md:top-5 top-1 right-2  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex justify-center items-center bg-white rounded-full md:w-8 md:h-8 w-5 h-5">
            <IoHeartOutline className="text-gray-700 md:size-4 size-3" />
          </div>
        </div>

        <div className="absolute bottom-14 md:bottom-20 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex justify-center items-center bg-black rounded-full md:w-8 md:h-8 w-5 h-5">
            <BsCart2
              className="text-gray-300 md:size-4 size-3"
              onClick={OnClickBasketIcon}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCart;
