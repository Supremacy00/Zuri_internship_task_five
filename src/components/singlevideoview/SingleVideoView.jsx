const SingleVideoView = () => {
  return (
    <div>
      <section className="md:container md:mx-auto font-roboto px-6 md:max-w-[1200px] ">
        <div className="flex justify-between items-center mt-6 md:mt-8">
          <img src="images/Frame 246 (2).png" alt="" />
          <img src="images/Framerepo.png" alt="" />
        </div>
      </section>
      <section>
        <div className="mt-6 text-center md:text-start px-6 mx-auto md:max-w-[1200px] md:mt-8">
          <p className="text-[14px] font-light">
            Home / Recent Videos /{" "}
            <span>How To Create A Facebook Ad Listing </span>{" "}
          </p>
          <div className="flex justify-center items-center gap-3 mt-2 md:mt-4 md:flex md:justify-start">
            <h1 className="text-[18px] font-medium">
              How To Create A Facebook Ad Listing
            </h1>
            <img
              src="images/edit.png"
              alt=""
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </div>
        </div>
        <div className="relative flex justify-center items-center mt-5 px-6 mx-auto md:max-w-[1200px]">
          <div className="border border-gray-300 rounded-2xl w-full  p-3">
            <img
              src="/images/heroImg1.png"
              alt=""
              className="w-full h-[400px] flex justify-center border mx-auto rounded-xl"
            />
          </div>
          <p className="absolute bottom-6 right-12 bg-gray-300 text-[12px] px-3 py-1 rounded-[3px]">
            00:34
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col w-full md:w-[1200px] px-6 mt-3 md:flex-row md:justify-between md:items-center md:mt-1">
            <div className="relative mt-6 flex-grow md:mr-44">
              <input
                type="email"
                name=""
                id=""
                className="border py-3.5 w-full rounded-lg bg-gray-100 font-light text-[13px] px-4 md:min-w-[50%] md:w-full "
                placeholder="enter email of receiver"
              />
              <div className="absolute top-[8px] right-4">
                <button className="bg-gray-500 px-3 py-2 rounded-md text-[12px] font-light">
                  Send
                </button>
              </div>
            </div>
            <div className="relative mt-6 flex-grow ">
              <input
                type="text"
                name=""
                id=""
                className="border py-3.5 rounded-lg w-full md:min-w-[70%] font-light text-[13px] px-2 pr-28 overflow-hidden whitespace-nowrap"
                value="https://www.helpmeout/Untitled_Video_20232509"
                style={{ textOverflow: 'ellipsis' }}
              />
              <div className="absolute top-[7px] right-2.5">
                <div className="flex items-center gap-1.5 border py-2 px-3 rounded-md">
                  <img src="/images/copy (2).png" alt="" className="w-4 h-4" />
                  <p className="text-[12px] font-light">Copy URL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 w-full px-6 md:text-start md:mt-10 md:w-[1200px]">
          <h4 className="mt-8 md:text-[15px]">Share your video</h4>
          <div className="flex justify-start items-start gap-4 text-[14px] mt-3 md:px-0 md:gap-3 md:flex md:justify-start font-roboto font-light ">
            <div className="flex items-center  border border-gray-400 rounded px-1.5 py-1.5 md:px-3 md:py-2 md:text-[14px]">
              <img src="/icons/Facebook svg.png" alt="" className="w-4 h-4" />
              <p>Facebook</p>
            </div>
            <div className="flex items-center border border-gray-400 rounded px-1.5 py-1.5 md:px-3 md:py-2 md:text-[14px]">
              <img src="/images/Vector (1).png" alt="" className="w-4 h-4" />
              <p>WhatsApp</p>
            </div>
            <div className="flex items-center  border border-gray-400 rounded px-1.5 py-1.5 md:px-3 md:py-2 md:text-[14px]">
              <img src="/images/Group (1).png" alt="" className="w-4 h-4" />
              <p>Telegram</p>
            </div>
          </div>
        </div>
        <div className="mx-auto md:w-[1200px] px-6">
          <div className="mt-10 mb-10">
            <h1 className="mt-8 md:text-[15px]">Transcript</h1>
            <select name="" id="" className="border px-3 py-2 mt-3">
                <option>English</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleVideoView;
