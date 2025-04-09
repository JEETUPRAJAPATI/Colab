import { motion } from 'framer-motion';

export default function NetworkStats() {
    return (
        <>
            {/* Navigation Section with Animation */}
            <motion.section
                className="relative mx-auto mt-[73px] h-[980px] w-full max-w-[1350px] px-5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="relative mt-10 max-w-full rounded-[10px] backdrop-blur-md lg:mt-[67px] lg:max-w-[1350px]">
                    <motion.img
                        className="absolute top-5 right-0 hidden w-10 md:-top-10 md:w-14 lg:right-[34px] lg:top-[55px] lg:block"
                        src="/assets/images/home-page/red-quote.png"
                        alt=""
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    />
                    <div className="relative mb-10 flex h-auto w-full flex-col items-center justify-end bg-cover bg-left max-sm:!bg-none sm:mb-0 sm:h-[720px] sm:flex-row sm:gap-8"
                        style={{ backgroundImage: 'url(/assets/images/home-page/build-banner.jpg)' }}
                    >
                        {/* Slide content */}
                        <motion.div
                            className="slide-content rounded-lg bg-gray-800 py-3 px-6 sm:max-w-[90%] sm:bg-[#00000095] lg:max-w-[50%]"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.h2
                                className="mb-3.5 max-w-[250px] text-3xl font-bold leading-tight text-black dark:text-white sm:max-w-none sm:text-[28px] sm:leading-[35px] md:text-[34px] md:leading-[40px] lg:text-[48px] lg:leading-[50px]"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                Turn your Good Idea into A Great Business
                            </motion.h2>

                            <motion.img
                                src="/assets/images/home-page/dream-divider.png"
                                alt=""
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                            />

                            <motion.p
                                className="mt-3.5 leading-[20px] text-[#344054] opacity-75 dark:text-white sm:text-sm md:text-lg md:leading-[30px]"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                We provide you access to a founder network, investors &amp; technology, arming your business with everything you need to take your startup <br />
                                to the next level.
                            </motion.p>
                        </motion.div>
                    </div>

                    {/* Tools Grid Section */}
                    <motion.div
                        className="absolute h-[270px] w-full sm:bottom-[-140px]"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="mb-6 text-center text-3xl font-bold leading-tight sm:text-4xl">
                            Access All The Tools You Need To Help Build Your Business
                        </h1>
                        <div className="grid grid-cols-2 text-white md:grid-cols-4">
                            {[
                                "Apollo", "Agora", "Asana", "Dell",
                                "Dropbox", "Github", "G-Workspace", "Notion",
                                "Oracle", "Slack", "Stripe", "Zendesk"
                            ].map((tool, index) => (
                                <motion.div
                                    key={tool}
                                    className="flex h-[90px] cursor-pointer items-center justify-center rounded-md bg-gray-800 p-4 border border-gray-600"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <img
                                        src={`/_next/static/media/${tool.replace(/\s+/g, '-')}.${tool === 'Apollo' ? 'cf10a042' : tool === 'Agora' ? '601dd555' : 'default'}.png`}
                                        alt={tool}
                                        className="h-[60px] w-auto max-w-[180px] md:h-[70px] lg:h-[80px]"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
}
