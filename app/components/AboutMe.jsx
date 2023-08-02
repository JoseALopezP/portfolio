import styles from './AboutMe.module.css'

export function AboutMe () {
    return (
        <>
            <div className={`${styles.presentationBlock}`}>
                <div className={`${styles.presentationTextBlock}`}>
                    <p className={`${styles.presentationText1}`}>¡Hola! Soy</p>
                    <h3 className={`${styles.presentationText2}`}>José López</h3>
                    <p className={`${styles.presentationText3}`}>&lt;<strong> Web Developer </strong>/&gt;</p>
                </div>
            </div>
        </>
    )
}