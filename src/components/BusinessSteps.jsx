import { motion } from "framer-motion";

export default function BusinessSteps() {
  return (
    <section className="build-your-business mx-auto w-full max-w-[1504px]">
      <motion.div
        className="m-auto w-full origin-top-left rounded-3xl bg-gradient-to-t from-[#ce979a] to-transparent px-5 pt-10 pb-5 dark:from-[#673146] sm:py-16 md:py-20 lg:py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex w-full flex-col items-center lg:flex-row">
          <div className="w-full px-4 pb-10 sm:px-6 md:px-8 lg:w-2/5 lg:text-left">
            <motion.p
              className="mb-4 text-5xl font-semibold leading-none text-[#a86761] sm:text-[68px] sm:leading-[4.5rem]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Building Your Dream Business
            </motion.p>

            <motion.p
              className="mt-2 text-sm font-light text-[#14171c] opacity-75 dark:font-extralight dark:text-white md:text-lg lg:text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              From advisors, investors, mentors & entrepreneurs, CoFoundersLab provides you with all the means necessary to find the perfect fit for your startup.
            </motion.p>

            <motion.button
              className="mt-5 font-inter rounded-[40px] py-3 px-5 text-lg font-bold capitalize text-white md:px-[38px] md:py-[21px] md:text-lg md:leading-[21.76px]"
              style={{
                background:
                  "linear-gradient(265.2deg, rgb(72, 170, 255) 5.21%, rgb(4, 117, 220) 43.25%)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Join for free
            </motion.button>
          </div>

          <div className="w-full px-4 sm:px-6 md:px-8 lg:w-3/5 lg:px-10">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
              {[
                {
                  title: "Freemium",
                  img: "fire.png",
                  desc: "Connect with Founders Worldwide",
                  gradient: "linear-gradient(98deg, rgba(214,113,91,0.1) 0%, rgba(202,108,105,0.1) 47%, rgba(173,96,138,0.1) 100%)"
                },
                {
                  title: "Launch",
                  img: "rocket.png",
                  desc: "Build your business with experts & exclusive resources",
                  gradient: "linear-gradient(226deg, rgba(4,79,172,0.06) 0%, rgba(8,23,46,0.04) 100%)"
                },
                {
                  title: "Premium",
                  img: "shield.png",
                  desc: "Unlimited messaging & connections",
                  gradient: "linear-gradient(226deg, rgba(48,32,43,0) 2%, rgba(129,35,62,0.25) 100%)"
                },
                {
                  title: "Advisors",
                  img: "headphones.png",
                  desc: "Connect with experts to take your business to the next level and get funded",
                  gradient: "linear-gradient(rgba(144,72,56,0.5) 0%, rgba(48,32,43,0) 100%)"
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="flex w-full flex-col items-center justify-center rounded-[20px] border border-solid border-[#FFFFFF26] py-10 px-4 lg:h-[294px] lg:p-3 cursor-pointer hover:shadow-sm hover:shadow-warning-500 transition-all duration-1000"
                    style={{ background: step.gradient }}
                  >
                    <img
                      className="mb-[14px] invert dark:invert-0"
                      src={`assets/images/home-page/${step.img}`}
                      alt={step.title}
                    />
                    <h4 className="mb-[7px] text-center text-lg font-bold text-black dark:text-white lg:text-2xl">
                      {step.title}
                    </h4>
                    <div className="text-center text-sm font-light capitalize text-[#344054] dark:font-extralight dark:text-white lg:text-lg">
                      {step.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
