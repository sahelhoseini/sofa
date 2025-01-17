const FilterProduct = () => {
  return (
    <>
      <div className="col-span-2 flex flex-col border p-2 rounded-md my-3">
        <p className="font-bold mb-7 text-xs">Filter Products</p>
        <p className=" px-5 py-1 rounded-full bg-gray-50">Color</p>
        <div className="border-b-2 mb-3 border-gray-100 flex items-center p-5 gap-2">
          <div className="h-4 w-4 bg-red-300 rounded-full"></div>
          <div className="h-4 w-4 bg-red-300 rounded-full"></div>
          <div className="h-4 w-4 bg-red-300 rounded-full"></div>
          <div className="h-4 w-4 bg-red-300 rounded-full"></div>
        </div>
        <p className=" px-5 py-1 rounded-full bg-gray-50">Price</p>
        <p className=" px-5 py-1 rounded-full bg-gray-50">Material</p>
        {/* <div className="border-b-2 mb-3 border-gray-100grid grid-cols-2 p-5 gap-2">
            
            
          </div> */}
      </div>
    </>
  );
};

export default FilterProduct;
