import { useState } from "react"


const EmailSenderCard = () => {
    const [isClose, setIsClose] = useState ();



  return (
    <div className="flex items-center justify-center h-screen px-8 font-roboto">
      <div className="relative bg-e-card-bg p-8 rounded-xl shadow-md text-center w-[350px] h-[500px]">
        <img src="/icons/close-circle.png" alt="" className="w-6 h-6 absolute right-8"/>
        <div className="">
            <div className="text-center"><img src="/images/success-kite.png" alt="" className="w-[150px] mx-auto " /></div>
            <p className="mt-9 text-[15px] font-light ">Your video link has been sent to <span className="font-normal text-foot-purp">johnmark@gmail.com</span></p>
        </div>
        <div className="mt-10">
            <p className="text-[12.5px] font-light">Would you need to view this video later? Save to your account now!</p>
            <button className="mt-4 text-[10px] font-light bg-foot-purp py-1.5 px-3.5 text-white rounded">Save Video</button>
            <div className="flex  justify-center items-center mt-5 gap-1">
                <p className="text-[12px] font-light text-slate-700">Don’t have an account?</p>
                <p className="text-[13px] text-foot-purp"> Create account</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EmailSenderCard