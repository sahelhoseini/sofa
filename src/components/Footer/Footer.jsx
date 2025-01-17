const Footer = () => {
  return (
    <>
      <div className="w-full max-w-[1440px] m-auto bg-gray-950 grid grid-cols-4 gap-2 py-10 px-5 md:px-20 mt-10">
        <div className="col-span-4 md:col-span-1 px-5">
          <p className="text-sm md:text-lg text-white mb-2">Our Store</p>
          <p className=" text-gray-500">
            Sofa is one of the biggest international fashion companies, one of
            the world's lorgest distribution groups.
          </p>
        </div>
        <div className="col-span-4 md:col-span-1 px-5">
          <p className="text-sm md:text-lg text-white mb-2">Quick Links</p>
          <ul className="text-gray-500 leading-none">
            <li className="mb-2 text-gray-500">My Account</li>
            <li className="mb-2 text-gray-500">Shopping Cart</li>
            <li className="mb-2 text-gray-500">Wishlist</li>
            <li className="mb-2 text-gray-500">Products</li>
          </ul>
        </div>
        <div className="col-span-4 md:col-span-1 px-5 hidden md:block">
          <p className="text-sm md:text-lg text-white mb-2">Information</p>
          <ul>
            <li className="mb-2 text-gray-500">Privacy Policy</li>
            <li className="mb-2 text-gray-500">Refund Policy</li>
            <li className="mb-2 text-gray-500">Shopping & Return</li>
            <li className="mb-2 text-gray-500">Terms & Condition</li>
          </ul>
        </div>
        <div className="col-span-4 md:col-span-1 px-5">
          <p className="text-sm md:text-lg text-white mb-2">
            Let's Get In Touch
          </p>
          <p className="text-gray-500">
            Sign Up For Our newsletter and receive 10% off your
          </p>
          <img
            src={window.location.origin + "/images/logo-white.png"}
            alt=""
            width="100px"
            className="float-end"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
