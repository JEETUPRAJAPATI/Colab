import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const logos = [
  { src: 'https://via.placeholder.com/150x50/333333/FFFFFF?text=Logo+1', alt: 'Company 1' },
  { src: 'https://via.placeholder.com/150x50/333333/FFFFFF?text=Logo+2', alt: 'Company 2' },
  { src: 'https://via.placeholder.com/150x50/333333/FFFFFF?text=Logo+3', alt: 'Company 3' },
  { src: 'https://via.placeholder.com/150x50/333333/FFFFFF?text=Logo+4', alt: 'Company 4' },
  { src: 'https://via.placeholder.com/150x50/333333/FFFFFF?text=Logo+5', alt: 'Company 5' },
  { src: 'https://via.placeholder.com/150x50/333333/FFFFFF?text=Logo+6', alt: 'Company 6' },
];

export default function LogoSlider() {
  return (
    <div className="bg-black/50 py-12">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-gray-400 uppercase tracking-wider mb-8">
          Trusted by industry leaders
        </p>
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}