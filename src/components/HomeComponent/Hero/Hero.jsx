import { RiSofaFill } from "react-icons/ri";

const Hero = () => {
  return (
    <>
      <div className="w-full max-w-[1440px] m-auto lg:pl-32 md:pl-20 px-10 mt-5">
        <p className="font-bold md:text-5xl tracking-wide leading-relaxed text-3xl">
          <button className="bg-orange-300 px-3 py-1 rounded-3xl">
            <RiSofaFill size="2rem" color="#fff" />
          </button>{" "}
          Elevate Your Lifestyle <br className="hidden md:block" /> whit Our
          Furniture <br />
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
