import HeroPrivacy from "../hero-privacy/HeroPrivacy";
import { useLocation } from 'react-router-dom';


const RecordData = () => {

  const location = useLocation();
  const videoURL = location.state?.videoURL || '';
  console.log(videoURL)



  return (
    <>
    <section className="container mx-auto font-roboto md:flex md:justify-between  md:max-w-[1200px] md:px-6 md:mt-20">
      <div className="md:w-[450px] md:pr-6">
      <div className="text-center mt-12 md:mt-0 md:text-start">
        <h1 className="text-4xl md:font-semibold md:text-[30px] md:mt-10">Your video is ready</h1>
        <div className="mt-6 md:mt-6">
          <p className="text-left mx-auto max-w-[225px] text-[12px] md:max-w-0 md:mx-0 md:text-[13px] text-gray-500 ">Name</p>
          <div className="flex items-center justify-center gap-2 md:gap-5 md:flex md:justify-start">
          <h4 className="md:text-[17px] font-medium">Untitled_Video_20232509</h4>
            <img src="images/edit.png" alt="" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
        </div>
      </div>
      <div className="flex justify-center relative text-center mt-8 px-8  md:text-start md:px-0 md:mt-10">
        <input
          type="text"
          className="w-full px-4 py-3 text-[13px] font-light border border-gray-300 rounded-xl shadow-sm bg-gray-200 focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-200 "
          placeholder="Enter email of receiver"
        />
       <div className="absolute inset-y-[1px] text right-12 md:right-5">
       <button className=" bg-primar-300 px-3.5 py-1.5 my-1.5 rounded-md text-[13px] text-white font-light">
          Send
        </button>
       </div>
      </div>
      <h4 className="text-left mx-8 mt-8 md:mx-0 md:text-[17px] md:font-medium">Video_Url</h4>
      
      <div className="flex justify-center relative text-center mt-3 px-8 md:px-0 md:mr-0">
        <input
          type="text"
          className="w-full px-4 py-3 text-[13px] font-light mr-0 pr-20 overflow-hidden whitespace-nowrap border border-gray-300 rounded-xl shadow-sm bg-gray-50 focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-200"
          placeholder="https://www.helpmeout/Untitled_Video_20232509"
          style={{ textOverflow: 'ellipsis' }}
        />
       <div className="absolute right-12 inset-y-[7px] flex items-center border border-gray-400 h-8 px-1 rounded-lg md:right-2 ">
          <img src="images/copy (2).png" alt="" className="w-4 h-4 text-white md:w-4 md:h-4" />
       <button className=" px-2 py-4 my-2 rounded-md text-[13px] text-gray-gray-600 font-light">
          Copy
        </button>
       </div>
      </div>
      
      <div className="mt-8 text-center md:text-start md:mt-10">
      <h4 className="text-center mt-8 md:text-start md:text-[15px]">Share your video</h4>
          <div className="flex justify-center px-8 items-center gap-4 text-[14px] mt-3 md:px-0 md:gap-3 md:flex md:justify-start font-roboto font-light ">
              <div className="flex items-center gap-1 border border-gray-400 rounded px-1 py-1 md:px-3 md:py-2 md:text-[14px]">
                  <img src="/images/Facebook svg.png" alt="" className="w-4 h-4" />
                  <p>Facebook</p>
              </div>
              <div className="flex items-center gap-1 border border-gray-400 rounded px-1 py-1 md:px-3 md:py-2 md:text-[14px]">
                  <img src="/images/Vector (1).png" alt="" className="w-4 h-4"/>
                  <p>WhatsApp</p>
              </div>
              <div className="flex items-center gap-1 border border-gray-400 rounded px-1 py-1 md:px-3 md:py-2 md:text-[14px]">
                  <img src="/images/Group (1).png" alt="" className="w-4 h-4"/>
                  <p>Telegram</p>
              </div>
          </div>
      </div>

      </div>

      <div className="mt-16 md:border-l-2 md:mt-0 md:mb-16 px-6 lg:pl-10 ">
          <hr className="md:hidden"/>
         <div className="border border-slate-500 rounded-md">
         <div className="px-6 border-b-2 border-slate-400">
              <img src="images/heroImg.jpg" alt="" className="w-[400px] h-[300px] mx-auto  mt-2 " />
          </div>
          <div className="flex justify-between items-center px-8 py-3">
            <img src="/icons/3_00.png" alt="" className="object-contain w-[100px] "/>
            <div className="flex items-center gap-5">
              <img src="/icons/play.png" alt="" className="object-contain w-6" />
              <img src="/icons/volume.png" alt="" className=" object-contain w-8" />
              <img src="/icons/settings (1).png" alt="" className=" object-contain w-8"/>
            </div>
          </div>
         </div>
         <div className="">
          <div className="mt-10 mb-10">
            <h1 className="mt-8 md:text-[15px]">Transcript</h1>
            <select name="" id="" className="border px-3 py-2 mt-3">
                <option>English</option>
            </select>
          </div>
        </div>
      </div>
      
    </section>

    <HeroPrivacy />
  </>
  )
}

export default RecordData