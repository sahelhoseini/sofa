import { RiSofaFill } from "react-icons/ri";

const Hero = () => {
  return (
    <>
      <div className="w-full max-w-[1440px] m-auto px-32">
        <p className="font-bold text-5xl tracking-wide leading-relaxed">
          <button className="bg-orange-300 px-3 py-1 rounded-3xl">
            <RiSofaFill size="2rem" color="#fff" />
          </button>{" "}
          Elevate Your Lifestyle <br /> whit Our Furniture <br />
          Creations{" "}
          <button className="bg-orange-300 text-white text-xl rounded-3xl px-3 py-1">
            Shop Now
          </button>
        </p>
      </div>
    </>
  );
};

export default Hero;
