import { Link } from "react-router-dom";

const OrderCart = ({ productOrder }) => {
  const { image, name, price, number } = productOrder;

  return (
    <div className="flex items-center gap-3 p-3 border rounded-md shadow-sm">
      <Link to="/product">
        <img
          src={window.location.origin + `/images/${image}`}
          alt={name}
          className="w-16 h-16 rounded-md object-cover"
        />
      </Link>
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-gray-600">
          {price} x {number}
        </p>
      </div>
    </div>
  );
};

export default OrderCart;
