import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <section>
      <div className="flex 2xl:max-w-[1500px] w-full m-auto flex-col overflow-hidden items-center px-5 lg:flex-row lg:px-0 bg-[linear-gradient(to_bottom,_rgba(6,_117,_219,_0.5)_5%,_rgba(65,_31,_43,_0)_30%)] pt-10 pb-5 dark:bg-[linear-gradient(to_bottom,_rgba(6,_117,_219,_0.5)_5%,_rgba(65,_31,_43,_0)_30%)]">

        {/* Left Content */}
        <motion.div
          className="content-col pb-12 text-center sm:pr-5 sm:pl-5 lg:basis-[48%] lg:pl-20 lg:pb-0 lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="max-w-full text-[26px] font-semibold text-black dark:text-white md:text-6xl md:leading-[68px] lg:max-w-[629px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Stay{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, rgb(214, 113, 91) 0%, rgb(202, 108, 105) 47.5%, rgb(173, 96, 138) 75.5%)" }}>
              Accountable With Launch!
            </span>
          </motion.h2>

          <motion.p
            className="my-2.5 mx-auto mb-5 max-w-[90%] text-sm font-light capitalize text-[#344054] opacity-75 dark:font-extralight dark:text-white md:my-5 md:text-xl lg:mx-0 lg:max-w-[395px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            From advisors, investors, mentors & entrepreneurs, CoFoundersLab provides you with all the means necessary to find the perfect fit for your startup.
          </motion.p>

          <motion.div
            className="mt-[50px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              className="font-inter rounded-[40px] py-3 px-5 text-lg font-bold capitalize text-white md:px-[38px] md:py-[21px] md:text-lg md:leading-[21.76px]"
              style={{
                background:
                  "linear-gradient(265.2deg, rgb(72, 170, 255) 5.21%, rgb(4, 117, 220) 43.25%)",
              }}
            >
              🚀 Join for free
            </button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="img-col lg:basis-[62%]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/images/home-page/launch-x-x.png"
            className="w-full pb-11 lg:pt-[35px] lg:pb-[70px] lg:pl-[34px]"
            alt="Launch"
          />
        </motion.div>
      </div>
    </section>
  );
}
