import { motion } from 'framer-motion';
import {
  UserGroupIcon,
  LightBulbIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

export default function Features() {
  const features = [
    {
      img: '/assets/images/home-page/community-start.png',
      title: 'Start your business',
      color: 'rgb(156, 105, 123)',
      description:
        'Got the next best idea in business? Get access to everything you need to take on the world with your StartUp',
    },
    {
      img: '/assets/images/home-page/community-grow.png',
      title: 'Grow your business',
      color: 'rgb(169, 117, 109)',
      description:
        'Ready to grow your market? Get exclusive access to professionals and leaders to get you there!',
    },
    {
      img: '/assets/images/home-page/community-fund.png',
      title: 'Fund your business',
      color: 'rgb(51, 160, 255)',
      description:
        'Is your business seeking capital? Access an exclusive network of investors and prepare your business to get Funded!',
    }
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="our-community w-full xs:px-5"
    >
      <div className="xs m-auto mt-11 w-full max-w-[1508px] rounded-[26px] bg-[linear-gradient(0deg,_#dfced9_0%,_rgba(51,_33,_45,_0)_100%)] pt-16 text-center dark:bg-[linear-gradient(0deg,_#33212D_0%,_rgba(51,_33,_45,_0)_100%)] xs:px-5 xs:pb-8 lg:px-14 lg:pb-32">
        <h4 className="text-sm font-medium uppercase leading-[22px] tracking-[0.2em] text-black dark:text-white">Our Community</h4>
        <h2 className="mt-8 font-semibold capitalize text-[#C095B4] xs:text-[30px] xs:leading-[34px] lg:text-[68px] lg:leading-[58px]">With you every step of the way</h2>

        <div className="mt-14 flex gap-x-4 xs:flex-col md:flex-row lg:gap-x-[25px]">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i}
              className={`flex-1 rounded-[10px] cursor-pointer hover:bg-black dark:font-extralight bg-opacity-40 xs:px-[10px] xs:pt-[25px] xs:pb-[20px] lg:px-[21px] lg:pt-[71px] lg:pb-[20px]`}
              style={{
                backgroundImage: `linear-gradient(180deg, ${item.color}80 0%, rgba(0,0,0,0) 80%)`
              }}
            >
              <div className="icon">
                <img
                  src={item.img}
                  className="m-auto invert dark:invert-0 xs:h-[60px] lg:h-[100px]"
                  alt={item.title}
                />
              </div>

              <div className="mt-4 mb-12">
                <h2 className="mb-2.5 text-xl font-bold capitalize lg:mb-4 lg:text-[28px] lg:leading-[42px]" style={{ color: item.color }}>
                  {item.title}
                </h2>
                <p className="mx-auto max-w-[265px] text-sm font-light text-[#344054] opacity-75 dark:text-white sm:max-w-[400px] lg:text-xl lg:leading-[28px]">
                  {item.description}
                </p>
              </div>

              <button className="rounded-[5px] bg-[#00000014] px-5 py-2.5 text-sm leading-[21.76px] text-black dark:bg-[#FFFFFF14] dark:text-white lg:px-[15px] lg:py-3.5 lg:text-lg">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}