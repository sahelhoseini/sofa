import { ProductCart } from "../../components";

const Shop = () => {
  return (
    <>
      <div className="w-full max-w-[1440px] m-auto grid grid-cols-12 md:px-44  px-10 md:mt-24 mt-32">
        <ProductCart image={"chair-1.png"} />
        <ProductCart image={"chair-1.png"} />
        <ProductCart image={"chair-1.png"} />
        <ProductCart image={"chair-1.png"} />
        <ProductCart image={"chair-1.png"} />
        <ProductCart image={"chair-1.png"} />
      </div>
    </>
  );
};

export default Shop;
