import styles from './AboutMe.module.css'
import Image from 'next/image'

const TechnologiesList = [{
    tName: 'JavaScript',
    route: './images/icons/javascript.svg'
},{
    tName: 'React.js',
    route: './images/icons/react.svg'
},{
    tName: 'HTML',
    route: './images/icons/html5.svg'
},{
    tName: 'CSS',
    route: './images/icons/css3.svg'
},{
    tName: 'Node.js',
    route: './images/icons/node.svg'
},{
    tName: 'Firebase',
    route: './images/icons/firebase.svg'
},{
    tName: 'Sass',
    route: './images/icons/sass.svg'
},{
    tName: 'Git',
    route: './images/icons/git.svg'
},{
    tName: 'Next.js',
    route: './images/icons/next.svg'
}]

export function Technologies() {
    return (
        <>
            {TechnologiesList.map(({tName, route}) =>(
                <button key={tName} className={`${styles.technologyIcon}`}>
                    <Image
                    src={route}
                    width={56}
                    height={56}
                    alt={tName}
                    />
                </button>
            ))}
        </>
    )
}