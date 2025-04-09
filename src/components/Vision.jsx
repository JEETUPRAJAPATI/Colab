import { motion } from 'framer-motion';

export default function Vision() {
  return (
    <section
      className="vision relative w-full xs:px-5"
      style={{ opacity: 1, willChange: 'auto' }}
    >
      <div className="relative z-10 flex w-full flex-col items-center justify-center pt-[63px] pb-[74px] text-center lg:text-left">
        <h3 className="text-sm font-medium uppercase leading-snug tracking-[2.80px] text-[#33a0ff]">
          Vision
        </h3>
        <h2
          className="mb-[14px] w-full max-w-[771px] pt-[23px] text-center text-[30px] font-semibold text-[#48a9ff] lg:text-[68px] lg:leading-[68px]"
          style={{
            background: 'linear-gradient(90deg, rgb(72, 170, 255), rgb(128, 195, 255), rgb(4, 117, 220))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Building The World’s Next Great Companies
        </h2>
        <p className="w-[90%] max-w-[649px] text-center capitalize text-md text-[#344054] opacity-75 dark:font-normal dark:text-white md:w-full md:text-lg">
          CoFoundersLab connects you to entrepreneurs, advisors, and investors across 200+ cities and 6 continents.
        </p>

        <div className="relative flex w-full max-w-[1200px] flex-col justify-around gap-6 pt-12 md:pt-[100px] lg:flex-row">
          {/* Left Image Section */}
          <div className="relative w-full">
            <img
              className="relative z-10 mx-auto w-full xs:max-w-[75%] lg:mx-0 lg:max-w-[526px] -scale-x-100"
              src="/assets/images/home-page/zee-work.png"
              alt=""
            />
            <div
              className="absolute left-[-20px] bottom-0 top-0 h-[345px] w-[50%] rounded-[500px] bg-gradient-to-l from-[#b80775] to-[#030102] opacity-60 blur-[50px] dark:opacity-100 md:w-[503px] lg:left-[-200px] lg:bottom-[-15px]"
              style={{ transform: 'scale(0.7)' }}
            ></div>
            <div
              className="absolute left-[45%] bottom-0 top-0 h-[298px] w-[50%] rounded-[500px] bg-gradient-to-r from-[#d6715bcb] via-[#ca6c69d1] to-[#ad608ab5] blur-[50px] md:bottom-[-15px] md:top-auto md:w-[298px] lg:left-[255px]"
            ></div>
          </div>

          {/* Right Text Section */}
          <div className="relative z-10 mt-5 flex w-full flex-col justify-between sm:mt-10 lg:mt-0 items-end">
            <h3 className="z-10 mb-2 w-full max-w-full text-[26px] font-semibold text-black dark:text-white md:mb-4 md:leading-[34px] lg:max-w-[454px] lg:text-[42px] lg:leading-[58px]">
              Shape <br className="xs:hidden lg:block" />
              Your Future
            </h3>
            <p className="z-10 w-full capitalize max-w-full text-sm font-light text-[#344054] opacity-75 dark:font-extralight dark:text-white md:text-lg md:leading-[31px] lg:max-w-[454px]">
              CoFoundersLab connects you to entrepreneurs, advisors, and investors across 200+ cities and 6 continents. CoFoundersLab connects you to entrepreneurs, advisors, and investors across 200+ cities and 6 continents.
            </p>
            <div className="xs-left-0 absolute w-full rounded-[500px] bg-gradient-to-r from-[#e87b633c] via-[#ae5d5a73] to-[#ad608a08] opacity-25 blur-[50px] xs:bottom-0 xs:top-0 md:h-full lg:left-[-50px] lg:bottom-[-15px] lg:top-auto lg:h-[298px] lg:max-w-[586px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
