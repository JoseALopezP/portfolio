import styles from './NavBar.module.css'
import { LanguageOptions } from './LanguageOptions'
import Link from 'next/link'

export function NavBar () {
    return (
        <header className={`${styles.headerBlock}`}>
            <span className={`${styles.fillerNavBarIcon}`}></span>
            <nav className={`${styles.navList}`}>
                <ul>
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">Sobre mí</Link></li>
                    <li><Link href="#">Portfolio</Link></li>
                    <li><Link href="#">Contacto</Link></li>
                </ul>
            </nav>
            <div className={`${styles.languageOptionsBlock}`}>
                <LanguageOptions/>
                <button>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles.translateSVG}`}>
                        <path d="M18.9086 10.5573L18.8571 10.4012H17.1429L17.0914 10.5573L12 24.2696H13.8343L15.118 20.8025H20.8815L22.1657 24.2696H24L18.9086 10.5573ZM15.7592 19.0689L18 13.0189L20.2403 19.0689H15.7592Z" fill="#FAFAFF"/>
                        <path d="M12 3.46708H15.4286V1.73354H8.57143V0H6.85714V1.73354H0V3.46708H10.2857C10.2857 6.24966 8.72914 8.88068 6.85714 11.0531C5.39118 9.34874 4.10057 7.34675 3.62547 5.20062H1.88767C2.38139 7.87028 3.94678 10.3022 5.69143 12.3136C3.1391 14.8896 0.462857 16.5622 0.411429 16.5954L1.3009 18.0779C1.52033 17.9426 4.23576 16.2542 6.87576 13.5929C7.89061 14.6172 8.90547 15.5053 9.75575 16.1774L10.8118 14.8129C9.99576 14.168 9.01518 13.3171 8.04 12.3324C10.178 9.8797 12 6.81826 12 3.46708Z" fill="#FAFAFF"/>
                    </svg>
                </button>
            </div>
        </header>
    )
}