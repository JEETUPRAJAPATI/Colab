import { motion } from 'framer-motion';

export default function NetworkStats() {
  return (
    <section className="m-auto w-full max-w-[1508px]">
      <motion.div
        className="map-sec w-full rounded-[26px] p-5 sm:px-[35px] sm:pt-[67px] sm:pb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          background:
            'linear-gradient(rgba(37, 58, 69, 0.78) 0%, rgba(90, 94, 96, 0) 96.83%)',
        }}
      >
        <motion.div
          className="global-map"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/assets/images/home-page/global-map.png"
            className="m-auto w-[80%]"
            alt=""
          />
        </motion.div>

        <motion.div
          className="content-wrapper m-auto -mt-12 w-full text-center sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#FF6544] sm:text-sm sm:leading-[22px]">
            NETWORK
          </h4>
          <h2
            className="m-auto mt-4 text-[26px] font-semibold capitalize leading-normal tracking-tight text-[#C095B4] md:text-[68px] md:leading-[68px] lg:w-[870px]"
            style={{
              background:
                'linear-gradient(90deg, rgb(214, 113, 91) 0%, rgb(202, 108, 105) 47.5%, rgb(173, 96, 138) 75.5%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Connect to an Expansive Global Network
          </h2>
          <p className="m-auto mt-2 max-w-full text-sm font-light capitalize text-[rgb(52,64,84)] opacity-75 dark:font-extralight dark:text-white md:mt-[26px] md:text-xl md:leading-[30.78px]">
            CoFoundersLab connects you to entrepreneurs, advisors & investors across 200+ cities and 6 continents.
          </p>
        </motion.div>

        <motion.div
          className="shining-border hidden justify-center sm:flex"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <img
            src="/assets/images/home-page/border.png"
            className="mx-auto"
            alt=""
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="m-auto mt-7 mb-[60px] w-full max-w-[760px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center justify-between sm:flex-row">
          {/* Left Icon Box */}
          <motion.div
            className="icon-box max-w-[250px] flex-1"
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon">
              {/* User icon */}
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                height="62"
                width="62"
                className="mx-auto"
                color="#D15E5E"
              >
                <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" />
              </svg>
            </div>
            <div className="content mt-4 md:mt-[30px]">
              <h2 className="text-center text-3xl font-semibold text-black dark:text-white lg:text-[64px] lg:leading-[58px]">
                700,000
              </h2>
              <p className="mt-2.5 text-center text-lg font-light capitalize text-[#344054] opacity-75 dark:font-extralight dark:text-white md:text-2xl lg:mt-[18px]">
                User worldwide
              </p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="shining-divider my-10 sm:my-0">
            <img
              src="/assets/images/home-page/divider.png"
              className="hidden sm:block"
              alt=""
            />
            <img
              src="/assets/images/home-page/border.png"
              className="block sm:hidden"
              alt=""
            />
          </div>

          {/* Right Icon Box */}
          <motion.div
            className="icon-box max-w-[180px] flex-1"
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon">
              {/* Advisors icon */}
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                height="62"
                width="62"
                className="mx-auto"
                color="#D15E5E"
              >
                <path d="M4.035 15.479A3.976 3.976 0 0 0 4 16c0 2.378 2.138 4.284 4.521 3.964C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.036C17.857 20.284 20 18.378 20 16c0-.173-.012-.347-.035-.521C21.198 14.786 22 13.465 22 12s-.802-2.786-2.035-3.479C19.988 8.347 20 8.173 20 8c0-2.378-2.143-4.288-4.521-3.964C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.036C6.138 3.712 4 5.622 4 8c0 .173.012.347.035.521C2.802 9.214 2 10.535 2 12s.802 2.786 2.035 3.479z" />
                <path d="m15.742 10.71-1.408-1.42-3.331 3.299-1.296-1.296-1.414 1.414 2.704 2.704z" />
              </svg>
            </div>
            <div className="content mt-4 md:mt-[30px]">
              <h2 className="text-center text-3xl font-semibold text-black dark:text-white lg:text-[64px] lg:leading-[58px]">
                200+
              </h2>
              <p className="mt-2.5 text-center text-lg font-light capitalize text-[#344054] opacity-75 dark:font-extralight dark:text-white md:text-2xl lg:mt-[18px]">
                Expert advisors
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
