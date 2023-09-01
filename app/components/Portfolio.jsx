import styles from './Portfolio.module.css'
import { PortfolioCarousel } from './PortfolioCarousel.jsx'

export function Portfolio () {
    return (
        <section className={`${styles.portfolioSection}`}>
            <h2>Portfolio</h2>
            <PortfolioCarousel/>
        </section>
    )
}
