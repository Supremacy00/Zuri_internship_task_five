import { LuSearch } from "react-icons/lu";

const VideoRepo = () => {
  const videorepo = [
    {
      image: "/images/heroImg1.png",
      title: "How to create Facebook Ad listing",
      date: "SEPTEMBER 23, 2023",
      id: 1,
    },
    {
      image: "/images/heroImg1.png",
      title: "How to create Facebook Ad listing",
      date: "SEPTEMBER 23, 2023",
      id: 2,
    },
    {
      image: "/images/heroImg1.png",
      title: "How to create Facebook Ad listing",
      date: "SEPTEMBER 23, 2023",
      id: 3,
    },
    {
      image: "/images/heroImg1.png",
      title: "How to create Facebook Ad listing",
      date: "SEPTEMBER 23, 2023",
      id: 4,
    },
  ];

  return (
    <div>
      <section className="container mx-auto font-roboto md:max-w-[1200px]">
        <div className="flex justify-between items-center mt-6 px-6 md:mt-10">
          <img src="images/Frame 246 (2).png" alt="" />
          <img src="images/Framerepo.png" alt="" />
        </div>
        <div className="mt-8 px-6 md:flex md:justify-between md:items-center md:mt-10">
          <div className="text-center md:text-start md:mt-8">
            <h1 className="text-[20px] font-bold md:text-[25px]">
              Hello, John Mark
            </h1>
            <p className="text-[14px] font-light">
              Here are your recorded videos
            </p>
          </div>
          <div className="relative flex justify-center items-center mt-5 md:block">
            <input
              type="text"
              className="border w-full pl-16 py-3 border-light-gray text-[13px] font-light text-light-gray bg-gray-100 rounded-lg md:w-[320px] md:py-3.5"
              placeholder="Search for a particular video"
            />
            <div className="absolute top-3 left-6 md:top-4 md:left-6 text-[22px] text-light-gray">
              <LuSearch />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full border border-gray-100 px-4 mt-8"></div>
      <section className="container mx-auto font-roboto md:max-w-[1200px]">
        <div>
          <p className="mt-4 text-[16px] font-light px-6 md:mt-8">
            Recent Files
          </p>
        </div>
        <div className="grid gap-8 mt-4 px-6 sm:grid-cols-1 md:grid-cols-2 ">
          {videorepo.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex justify-center">
                  <div className="border border-gray-300 rounded-2xl w-full md:max-w-[570px] p-3">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full  h-[180px] flex justify-center border mx-auto rounded-xl"
                    />
                    <div className="flex justify-between items-center mt-5">
                      <h1 className="text-[18px] font-mormal">{item.title}</h1>
                      <div className="flex gap-3">
                        <img src="/icons/link.png" alt="" />
                        <img src="/icons/more.png" alt="" />
                      </div>
                    </div>
                    <p className="mb-1.5 mt-1 text-[12.5px] font-light text-gray-400">
                      {item.date}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default VideoRepo;
