

const Features = () => {
  return (
    <>
    <div className=" mt-20 font-roboto">
        <section className="container mx-auto max-w-[1200px] px-5 md:px-8">
            <div className="text-center">
                <h1 className="text-[20px] font-bold md:text-[25px]">Features</h1>
                <p className="mt-1 text-[15px] font-light">Key Highlight of Our Extension</p>
            </div>
            <div className="md:flex md:justify-between md:items-center md:mt-10">
            <div className="nx-auto md:w-[400px]">
                <div className="flex gap-3 mt-10">
                    <img src="/icons/Icon placeholder.png" alt="" className="object-contain w-9 h-9"/>
                    <div>
                        <h2 className="text-[18px] font-medium">Simple Screen Recording</h2>
                        <p className="text-[15px] font-light">Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                    </div>
                </div>
                <div className="flex gap-3 mt-6 md:mt-9">
                    <img src="/icons/Icon placeholder (1).png" alt="" className="object-contain w-9 h-9" />
                    <div>
                        <h2 className="text-[18px] font-medium">Easy-to-Share URL</h2>
                        <p className="text-[15px] font-light">Share your recordings instantly with a single link. No attachments, no downloads.</p>
                    </div>
                </div>
                <div className="flex gap-3 mt-6 md:mt-9">
                    <img src="/icons/Icon placeholder (2).png" alt="" className="object-contain w-9 h-9"/>
                    <div>
                        <h2 className="text-[18px] font-medium">Revisit Recordings</h2>
                        <p className="text-[15px] font-light">Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <img src="/images/Video Repository.png" alt="" className="px-8 mx-auto md:w-[500px] md:px-0" />
            </div>
            </div>
        </section>
    </div>
    <div className="w-full bg-gray-200 py-5 mt-20"></div>
    </>
  )
}

export default Features