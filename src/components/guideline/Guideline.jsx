

const Guideline = () => {
  return (
    <div className="mt-24 container mx-auto md:max-w-[1200px] font-roboto ">
       <h1 className="text-[20px] font-bold text-center md:text-[25px]">How it works</h1>
      <section className="mt-10 px-5  sm:grid sm:grid-cols-2 sm md:grid-cols-3 gap-4 md:max-w-[1200px]">
        <div className="lg:max-w-[1300px]">
          <div className="text-center mx-auto md:max-w-[250px]">
          <img src="/icons/Icon (2).png" alt="" className="object-contain w-9 h-9 mx-auto" />
          <div className="mx-auto text-center">
            <h1 className="text-[20px] font-bold mt-6">Record Screen</h1>
            <p className="text-[15px] font-light mt-4 text-center ">Click the Start Recording button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
          </div>
          </div>
          <img src="/images/rec-1.svg.png" alt="" className="mt-6 mx-auto w-full md:w-[350px] "/>
        </div>
        <div>
          <div className="text-center mx-auto md:max-w-[250px]">
          <img src="/icons/Icon (1).png" alt="" className="object-contain w-9 h-9 mx-auto" />
          <div className="mx-auto text-center">
            <h1 className="text-[20px] font-bold mt-6">Share Your Recording</h1>
            <p className="text-[15px] font-light mt-4 text-center ">We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
          </div>
          </div>
          <img src="/images/rec-1.svg.png" alt="" className="mt-6 mx-auto w-full md:w-[350px] "/>
        </div>
        <div>
          <div className="text-center mx-auto md:max-w-[250px]">
          <img src="/icons/Icon.png" alt="" className="object-contain w-9 h-9 mx-auto" />
          <div className="mx-auto text-center">
            <h1 className="text-[20px] font-bold mt-6">Learn Effortlessly</h1>
            <p className="text-[15px] font-light mt-4 text-center ">Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone..</p>
          </div>
          </div>
          <img src="/images/rec-1.svg.png" alt="" className="mt-6 mx-auto w-full md:w-[350px] "/>
        </div>
      </section>
    </div>
  )
}

export default Guideline