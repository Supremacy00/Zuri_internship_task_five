const Hero = () => {
  return (
    <>
   <div className="w-full bg-gray-200 py-0.5 "></div>
    <div className="md:px-8 md:container md:mx-auto md:max-w-[1140px] lg:max-w-[1200px] ">
      <section className="mt-10 font-roboto md:flex md:justify-between md:items-center  ">
        <div className="text-center md:text-start md:w-[400px]">
          <h1 className="text-[25px] font-bold md:text-[42px] md:max-w-[300px] leading-[50px]">
            Show Them Don’t Just Tell
          </h1>
          <p className="mt-4 text-[14px] font-light md:text-[15px] md:mt-6 mx-auto max-w-[400px] md:mx-0">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
          <button className="text-[12px] bg-foot-purp py-2.5 px-5 mt-6 rounded-md text-white font-light md:mt-8">
            Install HelpMeOut
          </button>
        </div>
          <div>
          <div className="flex justify-center mt-16 px-5 gap-3 mx-auto max-w-[500px] md:px-0">
            <div className="relative">
              <img
                src="/images/heroImg1.png"
                alt=""
                className=" h-[150px] rounded-md mb-2 md:mb-3 md:w-[225px]"
              />
              <img
                src="/images/heroImg2.png"
                alt=""
                className=" h-[150px] rounded-md md:w-[225px]"
              />
              <div className="absolute top-[190px] -left-8 -z-50 ">
                <img src="images/grid1.svg.png" alt="" className="w-[150px]" />
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/heroImg3.png"
                alt=""
                className="relative h-[310px] rounded-md"
              />
              <div className="absolute  -top-5 -right-10 -z-50">
                <img src="/images/grid2.svg.png" alt="" className="w-[150px]" />
              </div>
            </div>
          </div>
          </div>
      </section>
    </div>
    <div className="w-full bg-gray-200 py-5 mt-20"></div>
    </>
  );
};

export default Hero;
