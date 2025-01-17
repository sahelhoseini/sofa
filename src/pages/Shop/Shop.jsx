import { FilterProduct, ProductCart } from "../../components";

const Shop = () => {
  return (
    <>
      <div className="w-full max-w-[1440px] m-auto md:mt-24 mt-32 md:px-32 px-5 relative">
        <img
          src={window.location.origin + "/images/banner.jpg"}
          alt=""
          className="h-80 w-full object-cover rounded-3xl max-h-[200px] md:max-h-[250px] lg:max-h-[350px]"
        />
        <p className="absolute top-5 left-10 md:top-10 md:left-40 p-2 bg-white rounded-full font-semibold md:text-2xl">
          <span className="text-orange-300 font-extrabold">20%</span> OFF ONLY
          TODAY AND
        </p>
        <p className="absolute top-14 left-10 md:top-20 md:left-40 p-2 bg-white rounded-full font-semibold md:text-2xl">
          GET SPECIAL GIFT!
        </p>
      </div>
      <div className="w-full max-w-[1440px] m-auto grid grid-cols-12 md:px-32 px-5 ">
        <FilterProduct />
        <div className="col-span-10 grid grid-cols-12">
          <ProductCart image={"chair-1.png"} />
          <ProductCart image={"chair-1.png"} />
          <ProductCart image={"chair-1.png"} />
          <ProductCart image={"chair-1.png"} />
          <ProductCart image={"chair-1.png"} />
          <ProductCart image={"chair-1.png"} />
        </div>
      </div>
    </>
  );
};

export default Shop;
