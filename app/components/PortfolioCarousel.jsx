'use client'
import React, { Component } from 'react';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export function PortfolioCarousel() {
  return (
    <>
      <Carousel>
        {Projects.map(({pName,pTech,pBody,pImg}) =>(
          
        ))}
        <div>
            <Image src='./images/icons/sass.svg' width={250} height={250} alt="foto"/>
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <Image src='./images/icons/sass.svg' width={250} height={250} alt="foto"/>
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <Image src='./images/icons/sass.svg' width={250} height={250} alt="foto"/>
            <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </>
  );
}
