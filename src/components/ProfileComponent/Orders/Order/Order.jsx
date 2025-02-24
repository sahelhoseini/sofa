import { useState } from "react";
import OrderCart from "../OrderCart/OrderCart";

const Order = ({ item, getStatusColor }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div>
          <p className="text-lg font-semibold">Order Date: {item.date}</p>
          <p
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
              item.status
            )}`}
          >
            {item.status.toUpperCase()}
          </p>
        </div>
        <p className="text-lg font-bold">${item.totalprice}</p>
      </div>

      {open && (
        <div className="mt-4 border-t pt-4 grid grid-cols-2 gap-2">
          {item.product.map((product, index) => (
            <OrderCart productOrder={product} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
