import ProductCart from "../../productCart/productCart";

const Favorit = () => {
  const favoritProduct = [
    { name: "woody", image: "chair-3.png", price: "200.00" },
    { name: "woody", image: "chair-5.png", price: "200.00" },
  ];

  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-1">
      {favoritProduct.map((value, index) => (
        <div key={index} className="col-span-1">
          <ProductCart
            image={value.image}
            name={value.name}
            price={value.price}
          />
        </div>
      ))}
    </div>
  );
};

export default Favorit;
