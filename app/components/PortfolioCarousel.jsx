'use client'
import React from 'react';
import styles from './Portfolio.module.css';
import Image from 'next/image';
import CarouselSlide from './CarouselSlide.jsx';

const ProjectsList = [{
  pName:"J・oso",
  pStatus:"In-progress",
  pTec:['javascript','html','css'],
  pDate:"Current",
  pImg:"./images/projects/joso.png",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"RSVP Wedding I",
  pStatus:"Sold",
  pTec:['javascript','html','css'],
  pDate:"Current",
  pImg:"./images/projects/rsvp1.png",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"RSVP Wedding II",
  pStatus:"Sold",
  pTec:['javascript','html','css'],
  pDate:"Current",
  pImg:"./images/projects/rsvp2.png",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"Blockudoku",
  pStatus:"In-progress",
  pTec:['javascript','html','css'],
  pDate:"Current",
  pImg:"./images/projects/blockudoku.png",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"Web Store II",
  pSstatus:"Finished",
  pTec:['javascript','html','css'],
  pDate:"Current",
  pImg:"a",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pImg:"./images/projects/webstore2.png",
  pPage:"s"
},
{
  pName:"Web Store I",
  pStatus:"Finished",
  pTec:['javascript','html','css'],
  pDate:"Current",
  pImg:"./images/projects/webstore1.png",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"Landing page I",
  pStatus:"Finished",
  pTec:['javascript','html','css'],
  pDate:"Current",
  pImg:"./images/projects/landingpage1.png",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
}]

const ImageURLs = {
  'javascript' : './images/icons/javascript.svg',
  'reactJS' : './images/icons/react.svg',
  'html' : './images/icons/html5.svg',
  'css' : './images/icons/css3.svg',
  'nodeJS' : './images/icons/node.svg',
  'firebase' : './images/icons/firebase.svg',
  'sass' : './images/icons/sass.svg',
  'git' : './images/icons/git.svg',
  'nextJS' : './images/icons/next.svg'
}

function mapping(arr){
  const aux = []
  arr.map(({pName,pImg,pTec}) =>(
    aux.push(
      <div className={`${styles.projectBlock}`} style={{backgroundImage: "url(" + pImg + ")",}}>
          <h4>{pName}</h4>
          <div className={`${styles.projectTechnologiesBlock}`}>
            {pTec.map((ImgUrl)=>(
              <Image src={ImageURLs[ImgUrl]}
              key={pName}
              width={56}
              height={56}
              alt={ImgUrl}
              className={`${styles.projectTechnologyIcon}`}/>))}
          </div>
          <button className={`${styles.projectSeeMoreButton}`}>Ver más</button>
      </div>
    )
  ))
  return aux
}


const PortfolioCarousel = () => {
  const divs = mapping(ProjectsList)
  return (
    <div>
      <CarouselSlide items={divs}/>
    </div>
  );
};

export default PortfolioCarousel;