const Auth = () => {
  return (
    <div>
      <section className="container mx-auto px-8 md:mx-auto md:max-w-[1200px]  md:my-8">
        <div className="flex justify-between items-center mt-16 ">
          <img src="images/Frame 246 (2).png" alt="" />
          <div></div>
        </div>
      </section>
      <section className="flex justify-center items-center font-roboto mt-16 px-2  ">
        <div>
          <div className="text-center w-[300px] mx-auto">
            <h1 className="text-[20px] font-bold md:text-[25px]">Log in or sign up</h1>
            <p className="text-[14px] font-light mt-2">
              Join millions of others in sharing successful moves on HelpMeOut.
            </p>
          </div>
          <div className="mt-8">
            <div>
              <button className="flex items-center justify-center border border-slate-500 rounded-xl px-[110px] py-2.5 gap-2 text-[14px] font-light">
                <img src="/icons/Google svg.png" alt="" className="w-5 h-5 " />
                Continue with Google
              </button>
            </div>
            <div>
              <button className="flex justify-center items-center border border-slate-500 rounded-xl  px-[102px] py-2.5 gap-2 mt-5 text-[14px] font-light">
                <img src="/icons/Facebook svg.png" alt="" className="w-5 h-5" />
                Continue with Facebook
              </button>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex items-center mb-6">
              <div className="border-t border-gray-400 w-full"></div>
              <span className="mx-2 text-gray-500 font-light">or</span>
              <div className="border-t border-gray-400 w-full"></div>
            </div>

            <div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[12px] font-light mt-3"
                >
                  Name
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full border py-2.5 rounded-xl mt-2 text-[14px] px-3 font-light"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-[12px] font-light mt-3"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="email"
                  id="password"
                  className="w-full border border-gray-300 py-2.5 rounded-xl mt-2 text-[14px] font-light px-3"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>
          <button className="flex justify-center mx-auto mt-7 bg-foot-purp text-white w-full py-2.5 rounded-lg font-light text-[13px]">Sign Up</button>
        </div>
      </section>
    </div>
  );
};

export default Auth;
