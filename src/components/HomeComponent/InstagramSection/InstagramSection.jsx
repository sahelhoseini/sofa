const InstagramSection = () => {
  return (
    <>
      <div className="w-full max-w-[1440px] m-auto md:px-20">
        <p className="font-extrabold md:text-2xl text-center">JUST ARRIVED </p>
        <div className="grid grid-cols-6 lg:grid-cols-8 px-10 py-5">
          <div className="col-span-6 lg:col-span-2  my-auto pr-7 ">
            <p className="font-semibold text-sm md:text-2xl mb-2">
              Instagram Shop
            </p>
            <p className="mb-2 text-xs md:text-base">
              Tag @ sofa in your instagram photos for a chance to be featured
              here
            </p>
            <button className="border border-gray-400 rounded-full px-3 py-2 md:text-base text-xs lg:mb-0 mb-3 hover:bg-black hover:text-white">
              Visit Our Instagram
            </button>
          </div>
          <div className="col-span-2 flex flex-col justify-center">
            <img
              src={window.location.origin + "/images/chair-1.png"}
              alt=""
              className="rounded-xl md:rounded-3xl"
            />
            <img
              src={window.location.origin + "/images/sofa-slider-1.jpg"}
              alt=""
              className="rounded-xl md:rounded-3xl"
            />
          </div>
          <div className="col-span-2 flex flex-col justify-center">
            <img
              src={window.location.origin + "/images/sofa-slider-2.jpg"}
              alt=""
              className="rounded-xl md:rounded-3xl"
            />
            <img
              src={window.location.origin + "/images/chair-3.png"}
              alt=""
              className="rounded-xl md:rounded-3xl"
            />
          </div>
          <div className="col-span-2 flex flex-col justify-center">
            <img
              src={window.location.origin + "/images/chair-5.png"}
              alt=""
              className="rounded-xl md:rounded-3xl"
            />
            <img
              src={window.location.origin + "/images/sofa-slider-3.png"}
              alt=""
              className="rounded-xl md:rounded-3xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InstagramSection;
