const Banner = () => {
  return (
    <>
      <div className="relative max-w-[1440px] m-auto w-full px-10 md:px-36 my-10">
        <img
          src={window.location.origin + "/images/banner.jpg"}
          alt=""
          className=" w-full object-cover rounded-3xl shadow-md h-[70%]"
        />
        <h1 className="absolute bg-white px-3 py-2 rounded-full top-4 right-12 md:right-40 z-10">
          CRAFT OWN FURNITURE
        </h1>
        <h1 className="absolute bg-white px-3 py-2 rounded-full top-14 md:text-xl right-12 md:right-40 z-10">
          Your new forever favorites are here
        </h1>
      </div>
    </>
  );
};

export default Banner;
