import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Startup Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    comment: 'CoFoundersLab has been instrumental in helping me find the perfect co-founder for my startup. The platform\'s matching algorithm is incredibly accurate!'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Tech Entrepreneur',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    comment: 'The networking opportunities on CoFoundersLab are unmatched. I\'ve connected with amazing advisors who have helped shape my business strategy.'
  },
  {
    name: 'Emily Watson',
    role: 'Product Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    comment: 'As a designer looking to join a startup, CoFoundersLab made it easy to find teams that valued my skills and shared my vision.'
  },
  {
    name: 'David Park',
    role: 'Angel Investor',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    comment: 'The quality of startups and founders on CoFoundersLab is impressive. It\'s become my go-to platform for discovering promising investment opportunities.'
  },
  {
    name: 'Lisa Zhang',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    comment: 'Found an amazing opportunity through CoFoundersLab. The platform made it easy to showcase my technical skills to potential co-founders.'
  },
  {
    name: 'James Wilson',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    comment: 'The community here is incredibly supportive. I\'ve received valuable feedback on my startup ideas and marketing strategies.'
  },
  {
    name: 'Anna Martinez',
    role: 'UX Researcher',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop',
    comment: 'CoFoundersLab\'s platform helped me connect with founders who truly value user research in their product development process.'
  },
  {
    name: 'Robert Kim',
    role: 'Serial Entrepreneur',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    comment: 'Having launched multiple startups, I can say that CoFoundersLab provides the best networking platform for entrepreneurs.'
  },
  {
    name: 'Sophie Anderson',
    role: 'Financial Advisor',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
    comment: 'The quality of connections and opportunities on CoFoundersLab is exceptional. It\'s where serious entrepreneurs meet.'
  },
  {
    name: 'Marcus Johnson',
    role: 'Blockchain Developer',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop',
    comment: 'Found the perfect team to build my blockchain project through CoFoundersLab. The technical talent here is outstanding.'
  }
];

const splitArray = (array) => {
  const half = Math.ceil(array.length / 2);
  return [array.slice(0, half), array.slice(half)];
};

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="w-[400px] h-[200px] mx-4 bg-[#1a1a1a] border border-white/10 rounded-xl p-6 flex flex-col justify-between shadow-xl hover:border-white/20 transition-all duration-300"
  >
    <div className="flex items-center gap-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
      />
      <div>
        <h3 className="text-white font-medium">{testimonial.name}</h3>
        <p className="text-gray-400 text-sm">{testimonial.role}</p>
      </div>
    </div>
    <p className="text-gray-300 text-sm mt-4 line-clamp-3">{testimonial.comment}</p>
  </motion.div>
);

export default function SocialProof() {
  const [topRow, bottomRow] = splitArray(testimonials);

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Loved by founders and entrepreneurs worldwide
          </h2>
          <p className="text-gray-400 text-lg">
            Join thousands of successful entrepreneurs who found their perfect match on CoFoundersLab
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Top Row Marquee */}
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className="py-4"
          >
            {topRow.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </Marquee>

          {/* Bottom Row Marquee - Reverse Direction */}
          <Marquee
            gradient={false}
            speed={40}
            direction="right"
            pauseOnHover={true}
            className="py-4"
          >
            {bottomRow.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}