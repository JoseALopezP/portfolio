'use client'
import React, {Component} from 'react';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Projects } from './Projects';

export function PortfolioCarousel() {
  return (
    <>
      <Carousel showThumbs={false}>
        <Projects/>     
        <div>
            <Image src='./images/icons/sass.svg' width={250} height={250} alt="foto"/>
        </div>
        <div>
            <Image src='./images/icons/sass.svg' width={250} height={250} alt="foto"/>
        </div>
        <div>
            <Image src='./images/icons/sass.svg' width={250} height={250} alt="foto"/>
        </div>
      </Carousel>
    </>
  );
}
