import { IoBedOutline } from "react-icons/io5";
import { LiaChairSolid } from "react-icons/lia";
import { MdCrib } from "react-icons/md";
import { RiSofaLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="w-full m-auto max-w-[1440px]">
      <div className="grid grid-cols-4 gap-4  px-10 md:px-36">
        {/* sofa */}
        <Link to="#">
          <div className="col-span-1 flex flex-col items-center group">
            <div className="w-16 h-16 md:h-20 md:w-20 bg-orange-300 rounded-full flex justify-center items-center group-hover:bg-white shadow-lg">
              <RiSofaLine
                size="3rem"
                className="text-white group-hover:text-orange-300"
              />
            </div>
            <p className="font-bold text-center mt-2 text-base md:text-xl">
              Sofa
            </p>
          </div>
        </Link>
        {/* child */}
        <Link to="#">
          <div className="col-span-1 flex flex-col items-center group">
            <div className="w-16 h-16 md:h-20 md:w-20 bg-orange-300 rounded-full flex justify-center items-center group-hover:bg-white shadow-lg">
              <MdCrib
                size="3rem"
                className="text-white group-hover:text-orange-300"
              />
            </div>
            <p className="text-base md:text-xl font-bold text-center mt-2">
              Child
            </p>
          </div>
        </Link>
        {/* bed */}
        <Link to="#">
          <div className="col-span-1 flex flex-col items-center group">
            <div className="w-16 h-16 md:h-20 md:w-20 bg-orange-300 rounded-full flex justify-center items-center group-hover:bg-white shadow-lg">
              <IoBedOutline
                size="3rem"
                className="text-white group-hover:text-orange-300"
              />
            </div>
            <p className="text-base md:text-xl font-bold text-center mt-2">
              Bed
            </p>
          </div>
        </Link>
        {/* kitchen */}
        <Link to="#">
          <div className="col-span-1 flex flex-col items-center group">
            <div className="w-16 h-16 md:h-20 md:w-20 bg-orange-300 rounded-full flex justify-center items-center group-hover:bg-white shadow-lg">
              <LiaChairSolid
                size="3rem"
                className="text-white group-hover:text-orange-300"
              />
            </div>
            <p className="text-base md:text-xl font-bold text-center mt-2">
              Kitchen
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
