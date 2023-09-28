'use client'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useState } from 'react'
import styles from './Portfolio.module.css'
import Image from 'next/image'
import CarouselSlide from './CarouselSlide.jsx'
import { SeeMoreProject } from './SeeMoreProject'
import './customCarousel.css'

const ProjectsList = [{
  pName:"J.oso",
  pStatus:"In-progress",
  pTec:['nextJS','javascript','html','css','firebase','git'],
  pDate:"Current",
  pImg:"./images/projects/joso.png",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"RSVP Wedding I",
  pStatus:"Sold",
  pTec:['reactJS','javascript','html','css','firebase','git'],
  pDate:"Current",
  pImg:"./images/projects/rsvp1.png",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"RSVP Wedding II",
  pStatus:"Sold",
  pTec:['reactJS','javascript','html','css','firebase','git'],
  pDate:"Current",
  pImg:"./images/projects/rsvp2.png",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"Blockudoku",
  pStatus:"In-progress",
  pTec:['javascript','html','css','git'],
  pDate:"Current",
  pImg:"./images/projects/blockudoku.png",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"Web Store II",
  pSstatus:"Finished",
  pTec:['reactJS','javascript','html','css','firebase','git'],
  pDate:"Current",
  pImg:"a",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pImg:"./images/projects/webstore2.png",
  pPage:"s"
},
{
  pName:"Web Store I",
  pStatus:"Finished",
  pTec:['javascript','html','css','git'],
  pDate:"Current",
  pImg:"./images/projects/webstore1.png",
  pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  pGit:"s",
  pPage:"s"
},
{
  pName:"Landing page I",
  pStatus:"Finished",
  pTec:['html','css','sass','git'],
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
  const [activeProject, setActiveProject] = useState('')
  const aux = []
  function handleClick(currentProject){
    setActiveProject(currentProject)
  }
  arr.map((project) =>(
    aux.push(
      <div style={{backgroundImage: "url(" + project.pImg + ")",}} className={`${styles.projectBlock}`}>
        <div className={`${styles.projectInside}`}>
          <h4 className={`${styles.projectName}`}>{project.pName}</h4>
          <div className={`${styles.projectTechnologiesBlock}`}>
            {project.pTec.map((ImgUrl)=>(
              <Image src={ImageURLs[ImgUrl]}
              key={project.pName}
              width={50}
              height={50}
              alt={project.ImgUrl}
              className={`${styles.projectTechnologyIcon}`}/>))}
          </div>
          <button onClick={handleClick} className={`${styles.projectSeeMoreButton}`}>Ver más</button>
        </div>
        <SeeMoreProject proj={project}/>
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