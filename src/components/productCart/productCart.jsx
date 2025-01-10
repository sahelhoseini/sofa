import { BsCart2 } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductCart = ({ image }) => {
  return (
    <div className="relative col-span-1 group m-1 md:m-3">
      <Link to="#">
        <img
          src={window.location.origin + `/images/${image}`}
          alt="Product"
          className="rounded-t-3xl group-hover:opacity-85 transition-opacity duration-300"
        />
        <div className="p-3">
          <p className="font-semibold text-sm md:text-lg">name</p>
          <p className="text-sm md:text-lg">$200.00</p>
        </div>

        {/* آیکن اول با پس‌زمینه دایره‌ای */}
        <div className="absolute top-5 md:right-2 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex justify-center items-center bg-white rounded-full w-8 h-8 ">
            <IoHeartOutline className="text-gray-700 size-4" />
          </div>
        </div>

        {/* آیکن دوم با پس‌زمینه دایره‌ای */}
        <div className="absolute bottom-20 md:right-2 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex justify-center items-center bg-black rounded-full w-8 h-8">
            <BsCart2 className="text-gray-300 size-4" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCart;
