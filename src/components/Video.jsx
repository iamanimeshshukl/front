export default function JoinCommunity() {
  return (
    <section className="relative mx-auto max-w-[1440px] min-w-[280px] py-8 px-4 sm:px-8 md:px-10 lg:px-20">
      <div className="relative bg-emerald-500 w-full rounded-[50px] sm:rounded-[60px] md:rounded-[70px] lg:rounded-[80px] flex flex-col lg:flex-row items-center py-6 sm:py-9 md:py-11 lg:py-14 px-2 sm:px-4 md:px-8 xl:px-16 shadow-xl">
        <img
          className="w-full lg:w-1/2 xl:w-full max-w-[550px] lg:order-2 drop-shadow-lg"
          src="https://iili.io/2ysFUen.png"
          alt="Join ZenHer Community"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl leading-[48px] md:text-5xl md:leading-[58px] lg:text-[50px] lg:leading-[70px] font-bold mb-6 md:mb-12 text-white drop-shadow-lg">
            Join the Zenher Community
          </h1>
         
          <br />
          <p className="text-xl leading-[27px] font-normal sm:text-[24px] mb-8 md:mb-12 text-white drop-shadow-md">
            Become part of a supportive community dedicated to women's health and wellness. Get expert insights, track your cycle, and connect with others on their health journey.
          </p>
          <button className="w-full flex items-center justify-between outline-gray-600 max-w-[350px] text-xl font-bold sm:text-lg rounded-[38px] bg-teal-700 text-white py-4 px-6 sm:px-9 hover:bg-teal-800 transition-all duration-300 shadow-lg"
          onClick={() => window.open("https://whatsapp.com/channel/0029Vb4inTy9WtC729jR8A3k", "_blank")}>
            <span>Join Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              height="20px"
              width="20px"
              viewBox="0 0 330 330"
            >
              <path
                d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}