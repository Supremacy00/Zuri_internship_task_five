

const HeroPrivacy = () => {
  return (
    <div className="bg-gray-50 py-6 mt-24 md:py-10 font-roboto">
        <section className="container mx-auto text-center max-w-[392px] md:max-w-[500px]">
            <div>
                <h2 className="text-[17px] md:text-[18px]">To ensure the availability and privacy of your video, we recommend saving it to your account</h2>
                <button className="mt-6 bg-purple-950 px-4 py-1.5 text-[12px] text-white font-light rounded md:py-2.5 md:px-5 md:mt-8" >Save Video</button>
                <div className="flex justify-center gap-2 mt-6 md:mt-8 ">
                <h3 className="text-gray-600">Dont have an account?</h3>
                <p className="underline text-[15px]">Create account</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HeroPrivacy