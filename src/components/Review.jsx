import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
};

export default function NetworkStats() {
    return (
        <motion.section
            className="review-sec w-full xs:px-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="m-auto w-full max-w-[840px] pt-9 pb-14 text-center md:pt-[74px] md:pb-[100px]">
                <div className="quote-row flex items-center gap-x-3.5">
                    <div className="shining-border flex-1">
                        <img src="/assets/images/home-page/border-left.png" alt="" />
                    </div>
                    <motion.div
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="lg:text-8xl mt-5 mr-6 font-['Inconsolata'] text-6xl font-semibold leading-[70px] text-black dark:text-white lg:mr-2.5 lg:leading-[100.7px]"
                    >
                        “ ”
                    </motion.div>
                    <div className="shining-border flex-1">
                        <img src="/assets/images/home-page/border-right.png" alt="" />
                    </div>
                </div>

                <motion.h2
                    className="text-[26px] font-bold text-[#344054] dark:text-white md:mt-5 md:text-5xl md:leading-[54px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    "Take Our Idea And Turn It into A Solid Business"
                </motion.h2>

                <motion.p
                    className="m-auto mt-2.5 max-w-[90%] text-sm font-light capitalize text-[#344054] opacity-75 dark:font-extralight dark:text-white md:mt-[36px] md:max-w-[734px] md:text-xl md:leading-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    By helping us find the right team member, CoFoundersLab really did help us take our company idea and turn it into a solid business that has the potential to change the world!
                </motion.p>

                <motion.div
                    className="mt-[36px] flex justify-center gap-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="avatar">
                        <img src="/assets/images/home-page/drew-taylor.png" className="h-12 w-12 md:h-auto md:w-auto" alt="Drew Taylor" />
                    </div>
                    <div className="info text-left">
                        <h3 className="text-base text-[#344054] dark:text-white md:text-xl md:leading-[35.12px]">
                            Drew Taylor
                        </h3>
                        <p className="text-sm font-medium text-[#A86792] opacity-75 md:text-lg md:leading-[21.78px]">
                            CoFounder of AstroPrint
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
