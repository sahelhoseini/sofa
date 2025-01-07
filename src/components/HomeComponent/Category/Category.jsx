import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="w-full m-auto max-w-[1440px]">
      <div className="grid grid-cols-3 gap-1 md:gap-4 px-10 md:px-36">
        <div className="col-span-1  w-full max-h-72 relative">
          <Link to="/">
            <img
              src={window.location.origin + "/images/table.jpg"}
              alt=""
              className="w-full h-full object-cover rounded-3xl  transition-transform duration-300 transform ease-in-out scale-100 hover:scale-105"
            />
            <p className="rounded-3xl bg-white px-1 py-1 md:text-xl text-xs absolute bottom-1 left-1">
              Living Room
            </p>
          </Link>
        </div>

        <div className="col-span-1  w-full max-h-72 relative">
          <Link to="/">
            <img
              src={window.location.origin + "/images/bed.jpg"}
              alt=""
              className="w-full h-full object-cover rounded-3xl  transition-transform duration-300 transform ease-in-out scale-100 hover:scale-105"
            />
            <p className="rounded-3xl bg-white px-1 py-1 md:text-xl text-xs absolute bottom-1 left-1">
              Bed Room
            </p>
          </Link>
        </div>

        <div className="col-span-1  flex flex-col gap-1 md:gap-2">
          <div className=" max-h-36 relative">
            <Link to="/">
              <img
                src={window.location.origin + "/images/baby.jpg"}
                alt=""
                className="w-full h-full object-cover rounded-3xl  transition-transform duration-300 transform ease-in-out scale-100 hover:scale-105"
              />
              <p className="rounded-3xl bg-white px-1 py-1 md:text-xl text-xs absolute bottom-1 left-1">
                Kids Room
              </p>
            </Link>
          </div>

          <div className=" max-h-36 relative">
            <Link to="/">
              <img
                src={window.location.origin + "/images/kitchen.jpg"}
                alt=""
                className="w-full h-full object-cover rounded-3xl  transition-transform duration-300 transform ease-in-out scale-100 hover:scale-105"
              />
              <p className="rounded-3xl bg-white px-1 py-1 md:text-xl text-xs absolute bottom-1 left-1">
                Kitchen
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
