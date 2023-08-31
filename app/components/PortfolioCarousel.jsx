'use client'
import React, {Component} from 'react';
import styles from './Portfolio.module.css'
import Image from 'next/image';
import Slider from "react-slick";

const ProjectsList = [{
  pName:"J・oso",
  status:"In-progress",
  Date:"Current",
  pImg:"a",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"RSVP Wedding I",
  status:"Sold",
  Date:"Current",
  pImg:"a",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"RSVP Wedding II",
  status:"Sold",
  Date:"Current",
  pImg:"a",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"Blockudoku",
  status:"In-progress",
  Date:"Current",
  pImg:"a",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"Web Store II",
  status:"Finished",
  Date:"Current",
  pImg:"a",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"Web Store I",
  status:"Finished",
  Date:"Current",
  pImg:"a",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"Landing page I",
  status:"Finished",
  Date:"Current",
  pImg:"a",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
}]
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1
};
function sliceIntoChunks(arr, chunkSize) {
  const aux = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      aux.push(chunk);
  }
  return aux;
}

export function PortfolioCarousel(){
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
            {sliceIntoChunks(ProjectsList, 4).map((ProjectsListPart, i) => (
                <li key={i} className={`${styles.slideProjects} slide`}>
                    <p>{ProjectsListPart.pName}</p>
                    <Image src='./images/icons/sass.svg' width={250} height={250} alt="foto"/>
                </li>
            ))}
        </Slider>
      </div>
    );
}