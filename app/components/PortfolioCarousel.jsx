'use client'
import React from 'react';
import styles from './Portfolio.module.css';
import Image from 'next/image';
import CarouselSlide from './CarouselSlide.jsx';

const ProjectsList = [{
  pName:"J・oso",
  pStatus:"In-progress",
  pDate:"Current",
  pImg:"a",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"RSVP Wedding I",
  pStatus:"Sold",
  pDate:"Current",
  pImg:"a",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"RSVP Wedding II",
  pStatus:"Sold",
  pDate:"Current",
  pImg:"a",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"Blockudoku",
  pStatus:"In-progress",
  pDate:"Current",
  pImg:"a",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"Web Store II",
  pSstatus:"Finished",
  pDate:"Current",
  pImg:"a",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"Web Store I",
  pStatus:"Finished",
  pTec:['javascript','html','css'],
  pDate:"Current",
  pImg:"a",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"Landing page I",
  pStatus:"Finished",
  pDate:"Current",
  pImg:"a",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
}]

function sliceIntoChunks(arr, chunkSize) {
  const aux = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      aux.push(chunk);
  }
  return aux;
}
function mapping(arr){
  
}


const PortfolioCarousel = () => {
  const divs = [
    {ProjectsList.map(({pName,pImg,ptext}) =>(
      <div></div>
    ))}
  ];

  return (
    <div>
      <h1>Four Div Carousel</h1>
      <CarouselSlide items={divs} />
    </div>
  );
};

export default PortfolioCarousel;