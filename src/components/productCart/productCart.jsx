import { BsCart2 } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductCart = ({ image }) => {
  return (
    <div className="relative col-span-1 group">
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

        <div className="absolute top-5 md:right-0 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <IoHeartOutline className="mr-5 text-gray-700 md:size-5 size-2" />
        </div>

        <div className="absolute bottom-20 md:right-0 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <BsCart2 className="mr-5 text-gray-700 md:size-5 size-2" />
        </div>
      </Link>
    </div>
  );
};

export default ProductCart;
