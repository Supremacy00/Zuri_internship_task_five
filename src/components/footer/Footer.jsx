

const Footer = () => {
  return (
    <footer className="bg-foot-purp mt-10 py-16 text-white font-roboto">
      <div className="container mx-auto sm:px-8 sm:flex sm:justify-between sm:gap-10 sm:items-center md:gap-20 lg:gap-x-52 max-w-[1200px]">
        <span className="flex justify-center sm:block">
        <img src="images/Frame 246 (1).png" alt="" className="object-contain" />
        </span>

        <div className="sm:flex sm:justify-between sm:items-center sm:flex-grow">
          <ul className="text-center mt-10 text-[14px] font-light sm:text-left ">
            <li className="text-[16px] font-medium">Home</li>
            <li className="my-2 sm:mt-4">Converter</li>
            <li className="my-2">How it works</li>
            <li>How it works</li>
          </ul>

          <ul className="text-center mt-10 text-[15px] font-light sm:text-left ">
            <li className="text-[16px] font-medium">About Us</li>
            <li className="my-2 sm:mt-4">About</li>
            <li className="my-2">Contact Us</li>
            <li>Privacy Policy</li>
          </ul>

          <ul className="text-center mt-10 text-[15px] font-light sm:text-left ">
            <li className="text-[16px] font-medium">Screen Record</li>
            <li className="my-2 sm:mt-4">Browser Window</li>
            <li className="my-2">Desktop</li>
            <li>Application</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
