import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { MultiSlider } from "../../components";

const Product = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [addedColors, setAddedColors] = useState([]);

  const sliderImage = [
    "chair-3.png",
    "chair-2.png",
    "chair-1.png",
    "chair-5.png",
  ];

  const product = {
    image1: "chair-1.png",
    image2: "chair-2.png",
    image3: "chair-3.png",
    name: "chair woody",
    code: "001A",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, mollitia.",
    color: ["red", "black", "orange"],
    price: "200.00",
  };

  const [largImage, setLargImage] = useState(product.image1);

  // set image as lorg image
  const onClickLargImage = (value) => {
    setLargImage(value);
  };

  //   useEffect(() => {
  //     funcAddedColors();
  //   }, []);

  //   add selected color to selectedColor
  //   const funcAddedColors = () => {
  //     const temp = basket.filter((item) => item.product_id === id);
  //     const uniqueColors = Array.from(new Set(temp.map((item) => item.color)));
  //     setAddedColors(uniqueColors);
  //   };

  return (
    <>
      <div className="m-auto max-w-[1440px] w-full mt-28 px-3">
        {/* back arrow */}
        <Link to="/shop" className="p-4 font-bold mr-3 flex align-center">
          <span>
            <IoIosArrowBack color="whit" className="ml-2" size="1.5rem" />
          </span>
          Back To Shop
        </Link>

        <div className="container mx-auto grid grid-cols-12 border border-gray-300 gap-3 mb-10 rounded-xl overflow-hidden">
          {/* Product Images */}
          <div className="col-span-4 md:col-span-2 border-r p-2 md:p-5">
            {product.image1 && (
              <button onClick={() => onClickLargImage(product.image1)}>
                <img
                  src={window.location.origin + `/images/${product.image1}`}
                  alt="Product Image 1"
                  className={`border ${
                    largImage === product.image1
                      ? "border-gray-400 rounded-xl"
                      : "border-gray-200 rounded-xl"
                  }`}
                />
              </button>
            )}
            {product.image2 && (
              <button onClick={() => onClickLargImage(product.image2)}>
                <img
                  src={window.location.origin + `/images/${product.image2}`}
                  alt="Product Image 2"
                  className={`border ${
                    largImage === product.image2
                      ? "border-gray-400 rounded-xl"
                      : "border-gray-200 rounded-xl"
                  }`}
                />
              </button>
            )}
            {product.image3 && (
              <button onClick={() => onClickLargImage(product.image3)}>
                <img
                  src={window.location.origin + `/images/${product.image3}`}
                  alt="Product Image 3"
                  className={`border ${
                    largImage === product.image3
                      ? "border-gray-400 rounded-xl"
                      : "border-gray-200 rounded-xl"
                  }`}
                />
              </button>
            )}
          </div>

          {/* Main Product Image */}
          <div className="col-span-8 md:col-span-5 flex">
            <img
              src={window.location.origin + `/images/${largImage}`}
              alt=""
              className="object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="col-span-12 md:col-span-5 p-5 border-t md:border-none">
            <p className="text-gray-500 text-xs">{product.code}</p>
            <p className="text-2xl">{product.name}</p>
            <p className="text-gray-500 text-xs border-b border-gray-100 py-5">
              {product.description}
            </p>

            {/* Color Selection */}
            <p className="text-gray-500 text-xs py-5">Choose Color</p>
            <div className="flex align-center gap-3">
              {product.color &&
                product.color.map((value, index) => (
                  <div
                    key={index}
                    className={`relative rounded-full w-5 h-5 cursor-pointer ${
                      value === "red"
                        ? "bg-red-600"
                        : value === "black"
                        ? "bg-black"
                        : value === "blue"
                        ? "bg-blue-500"
                        : value === "yellow"
                        ? "bg-yellow-400"
                        : value === "green"
                        ? "bg-green-500"
                        : value === "orange"
                        ? "bg-orange-500"
                        : ""
                    } ${selectedColor === value ? "opacity-70" : ""}`}
                    onClick={() => setSelectedColor(value)}
                  >
                    {addedColors.includes(value) && (
                      <FaCheck className="absolute top-1/4 left-1/4 w-1/2 h-1/2 text-white flex items-center justify-center" />
                    )}
                  </div>
                ))}
            </div>

            <p className="text-2xl py-5">${product.price}</p>

            {/* Add/Remove to Basket */}
            {selectedColor ? (
              addedColors.includes(selectedColor) ? (
                <button
                  className="border py-2 px-4 bg-red-500 text-white text-xs rounded-3xl"
                  // onClick={() => removeFromBasket(selectedColor)}
                >
                  Remove From Basket
                </button>
              ) : (
                <button
                  className="border py-3 px-5 bg-black text-white text-xs mr-3 rounded-3xl"
                  // onClick={addToBasket}
                >
                  Add To Basket
                </button>
              )
            ) : null}
          </div>
        </div>

        {/* Modal */}
        {/* {modal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-100 z-50">
          <div className="flex justify-center items-center h-full">
            <div className="bg-white p-6 w-96 border shadow text-center z-60">
              <p className="text-xl font-semibold">You are not logged in!</p>
              <p className="mt-4">
                Please sign in to add this item to the basket.
              </p>
              <button
                className="mt-6 py-2 px-4 bg-black text-white rounded"
                onClick={closeModalOnClick}
              >
                Close
              </button>
              <button
                className="mt-6 py-2 px-4 bg-black text-white rounded ml-3"
                onClick={signInOnClick}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      )} */}
        {/* similar product */}
        <MultiSlider sliderImage={sliderImage} />
      </div>
    </>
  );
};

export default Product;
