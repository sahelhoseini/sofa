const Banner = () => {
  return (
    <>
      <div className="relative max-w-[1440px] m-auto w-full h-[200px] md:h-[300px] px-10 md:px-36 flex items-center">
        <img
          src={window.location.origin + "/images/banner.jpg"}
          alt=""
          className=" w-full object-cover rounded-3xl shadow-md h-full scale-x-[-1] transform "
        />
        <h1 className="absolute bg-white px-3 py-2 rounded-full top-4 right-12 md:right-40 z-5">
          CRAFT OWN FURNITURE
        </h1>
        <h1 className="absolute bg-white px-3 py-2 rounded-full top-12 md:text-xl right-12 md:right-40 z-5">
          Your new forever favorites are here
        </h1>
      </div>
    </>
  );
};

export default Banner;
