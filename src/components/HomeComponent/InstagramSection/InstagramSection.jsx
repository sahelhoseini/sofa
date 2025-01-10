const InstagramSection = () => {
  return (
    <>
      <div className="w-full max-w-[1440px] m-auto h-96">
        <p className="font-extrabold md:text-2xl text-center mb-3">
          JUST ARRIVED{" "}
        </p>
        <div className="grid grid-cols-6 p-10">
          <div className="col-span-3 bg-red-400 flex items-center justify-start">
            <p>salam</p>
          </div>
          <div className="col-span-1 bg-red-600 flex flex-col justify-center"></div>
          <div className="col-span-1 bg-red-800 flex flex-col justify-center"></div>
          <div className="col-span-1 bg-red-950 flex flex-col justify-center"></div>
        </div>
      </div>
    </>
  );
};

export default InstagramSection;
