import styles from './Presentation.module.css'

export function Presentation () {
    return (
        <>
            <section className={`${styles.presentationBlock}`} id='home'>
                <div className={`${styles.presentationTextBlock}`}>
                    <p className={`${styles.presentationText1}`}>¡Hola! Soy</p>
                    <div className={`${styles.typewritterBlock} ${styles.presentationText2}`}>
                        <h3 className={`${styles.presentationText2}`}>José López</h3>
                    </div>
                    <p className={`${styles.presentationText3}`}>&lt;<strong> Web Developer </strong>/&gt;</p>
                </div>
            </section>
        </>
    )
}