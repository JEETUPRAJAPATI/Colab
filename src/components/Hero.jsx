import {
  UserGroupIcon,
  LightBulbIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="HeroSection bg-none-1 relative z-10 m-auto mt-20 h-auto max-w-[1298px] px-5 sm:mt-0 sm:pt-[86px] lg:bg-[url('/assets/images')] lg:bg-cover lg:bg-no-repeat lg:dark:bg-[url('/assets/images/home-page/dark-hero-bg.png')]">
      <div className="hero-title flex flex-col items-center justify-center pt-5 md:pt-10 lg:bg-[url('/assets/images/home-page/bg-shape-center.png')] lg:bg-[center_top_-135px] lg:bg-no-repeat">
        <div className="h-full w-full max-w-md text-center text-[32px] font-semibold leading-tight text-black dark:text-white md:max-w-[872px] md:text-[68px] md:leading-[78px]">
          The Startup Community{' '}
          <span className="bg-gradient-to-r from-[#d6715b] via-[#ca6c69] to-[#ad608a] bg-clip-text text-transparent">
            Start. Grow. Fund.
          </span>
        </div>

        <div className="font-Inter mt-[26px] mb-5 max-w-[90%] break-words text-center text-base font-normal capitalize text-[#344054] dark:text-white sm:text-xl md:mb-[43px] md:max-w-[561px]">
          CoFoundersLab is the largest startup community on the Internet.
          Accelerate your business today.
        </div>

        <div>
          <button className="font-inter rounded-[40px] py-3 px-5 text-lg font-bold capitalize text-white md:px-[38px] md:py-[21px] md:text-lg md:leading-[21.76px] bg-gradient-to-r from-[#48AAFF] to-[#0475DC]">
            🚀 Join for free
          </button>
        </div>

        <div>
          <section className="m-auto mt-[73px] mb-[31px] w-full max-w-[1023px] rounded-[10px] border border-solid border-[#00000026] bg-[#00000014] px-5 py-[42px] px-8 dark:border-[#FFFFFF26] dark:bg-[#FFFFFF14] lg:pb-[35px] lg:pt-[47px]">
            <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-[46px]">
              {/* Card 1 */}
              <div className="basis-full rounded-[10px] text-center md:basis-4/12">
                <div className="icon">
                  <img
                    src="/assets/images/home-page/handshake.png"
                    alt="Icon"
                    className="mx-auto w-auto invert dark:invert-0"
                  />
                </div>
                <div className="content">
                  <h2 className="mt-5 mb-2 text-lg font-semibold leading-9 text-black dark:text-white lg:mt-7 lg:mb-3.5 lg:text-2xl">
                    Find a CoFounder
                  </h2>
                  <p className="text-base font-light capitalize leading-[22px] text-[#344054] opacity-75 dark:font-extralight dark:text-white">
                    Find your perfect partner based on interests, skills and location.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="basis-full rounded-[10px] text-center md:basis-4/12">
                <div className="icon">
                  <img
                    src="/assets/images/home-page/bulb.png"
                    alt="Icon"
                    className="mx-auto w-auto invert dark:invert-0"
                  />
                </div>
                <div className="content">
                  <h2 className="mt-5 mb-2 text-lg font-semibold leading-9 text-black dark:text-white lg:mt-7 lg:mb-3.5 lg:text-2xl">
                    Get the Right Advice
                  </h2>
                  <p className="text-base font-light capitalize leading-[22px] text-[#344054] opacity-75 dark:font-extralight dark:text-white">
                    Get Exclusive Access to industry leaders to accelerate your growth
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="basis-full rounded-[10px] text-center md:basis-4/12">
                <div className="icon">
                  <img
                    src="/assets/images/home-page/dollar.png"
                    alt="Icon"
                    className="mx-auto w-auto invert dark:invert-0"
                  />
                </div>
                <div className="content">
                  <h2 className="mt-5 mb-2 text-lg font-semibold leading-9 text-black dark:text-white lg:mt-7 lg:mb-3.5 lg:text-2xl">
                    Get Funded
                  </h2>
                  <p className="text-base font-light capitalize leading-[22px] text-[#344054] opacity-75 dark:font-extralight dark:text-white">
                    Prepare and perfect your pitch to get your business funded today!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
