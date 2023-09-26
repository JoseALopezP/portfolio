import styles from './Contact.module.css'

export function Contact () {
    return (
        <div className={`${styles.wavesBlock}`}>
            <div className={`${styles.contactBlock}`}>
                <h4 className={`${styles.contactTitle}`}>Contact</h4>
                <form className={`${styles.contactForm}`} action="" method="post">
                    <label for="POST-name">Nombre</label>
                    <input className={`${styles.textInput}`} id="POST-name" type="text" name="Tu nombre" />
                    <label for="POST-name">Email</label>
                    <input className={`${styles.textInput}`} id="POST-name" type="text" name="Tu email" />
                    <label for="POST-name">Mensaje</label>
                    <input className={`${styles.textInput}`} id="POST-name" type="text" name="Tu mensaje" />
                    <input type="submit" value="Enviar →" />
                </form>
            </div>
        </div>
    )
}