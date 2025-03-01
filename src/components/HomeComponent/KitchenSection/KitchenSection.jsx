import ProductCart from "../../productCart/productCart";

const KitchenSection = () => {
  return (
    <>
      <div className="w-full max-w-[1440px] m-auto mt-8">
        <p className="font-extrabold md:text-2xl text-center mb-3">
          You Are In The Kitchen
        </p>
        <div className=" grid grid-cols-12 md:px-44  px-10 ">
          <ProductCart image="chair-3.png" name={"woody"} price={"100.00"} />
          <ProductCart image="chair-1.png" name={"woody"} price={"100.00"} />
          <ProductCart image="chair-4.png" name={"woody"} price={"100.00"} />
          <ProductCart image="chair-3.png" name={"woody"} price={"100.00"} />
          <ProductCart image="chair-5.png" name={"woody"} price={"100.00"} />
          <ProductCart image="chair-1.png" name={"woody"} price={"100.00"} />
          <ProductCart image="chair-4.png" name={"woody"} price={"100.00"} />
          <ProductCart image="chair-5.png" name={"woody"} price={"100.00"} />
        </div>
      </div>
    </>
  );
};

export default KitchenSection;
