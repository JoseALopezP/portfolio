import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselSlide = ({ items }) => {
  const divsPerSlide = 4;
  const numberOfSlides = Math.ceil(items.length / divsPerSlide);

  const slideItems = Array.from({ length: numberOfSlides }, (_, index) => {
    const startIndex = index * divsPerSlide;
    const slideDivs = items.slice(startIndex, startIndex + divsPerSlide);
    
    return (
      <div key={index}>
        {slideDivs.map((item, i) => (
          <div key={i} className="carousel-item">
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