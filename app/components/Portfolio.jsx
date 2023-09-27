import styles from './Portfolio.module.css'
import PortfolioCarousel from './PortfolioCarousel.jsx'

export function Portfolio () {
    return (
        <section className={`${styles.portfolioSection}`} id='portfolio'>
            <h2 className={`${styles.portfolioTitle}`}>Portfolio</h2>
            <PortfolioCarousel/>
        </section>
    )
}
