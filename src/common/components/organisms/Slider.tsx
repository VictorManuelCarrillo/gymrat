'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Box } from '@mui/material';
import s from './Slider.module.scss';

// Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Swiper styles
import 'swiper/swiper-bundle.css';

interface CarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  height?: any;
}

export const Carousel: React.FC<CarouselProps> = (props) => {
  const { images, height = '50vh' } = props;
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={true}
      pagination={{ clickable: true }}
      grabCursor={true}
      centeredSlides={false}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={2000}
      className={s.slider}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Box sx={{ width: '100%', height: height, position: 'relative', marginBottom: '2.4em' }}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{
                objectFit: 'contain',
              }}
              priority={false}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
