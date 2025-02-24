import Order from "./Order/Order";

const Orders = () => {
  const temp = [
    {
      date: "2024-12-11",
      status: "sent",
      totalprice: 220,
      product: [{ image: "chair-1.png", name: "Woody", price: 110, number: 2 }],
    },
    {
      date: "2024-05-11",
      status: "reject",
      totalprice: 910,
      product: [
        { image: "chair-2.png", name: "Woody", price: 210, number: 1 },
        { image: "chair-5.png", name: "Stil", price: 300, number: 3 },
      ],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "sent":
        return "text-green-600 bg-green-100";
      case "reject":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
      <div className="space-y-4">
        {temp.map((item, index) => (
          <Order item={item} key={index} getStatusColor={getStatusColor} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
