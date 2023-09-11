import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from './Portfolio.module.css'


const CarouselSlide = ({ items }) => {
  const divsPerSlide = 4;
  const numberOfSlides = Math.ceil(items.length / divsPerSlide);

  const slideItems = Array.from({ length: numberOfSlides }, (_, index) => {
    const startIndex = index * divsPerSlide;
    const slideDivs = items.slice(startIndex, startIndex + divsPerSlide);
    
    return (
      <div key={index} className={`${styles.slideBlock}`}>
        {slideDivs.map((item, i) => (
          <div key={i} className={`${styles.carouselItem}`}>
            {item}
          </div>
        ))}
      </div>
    );
  });

  return (
    <Carousel showArrows showThumbs={false}>
      {slideItems}
    </Carousel>
  );
};

export default CarouselSlide;