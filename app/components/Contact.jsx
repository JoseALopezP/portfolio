import styles from './Contact.module.css'

export function Contact () {
    return (
        <section className={`${styles.wavesBlock}`} id='contact'>
            <div className={`${styles.contactBlock}`}>
                <h4 className={`${styles.contactTitle}`}>Contact</h4>
                <form className={`${styles.contactForm}`} action="" method="post">
                    <label for="POST-name">Nombre</label>
                    <input className={`${styles.textInput}`} id="POST-email" type="text" name="Tu nombre" placeholder="Tu nombre"/>
                    <label for="POST-name">Email</label>
                    <input className={`${styles.textInput}`} id="POST-name" type="text" name="Tu email" placeholder="Tu email"/>
                    <label for="POST-name">Mensaje</label>
                    <textarea className={`${styles.textInput} ${styles.textInputMessage}`} id="POST-message" type="text" name="Tu mensaje" placeholder="Tu mensaje"/>
                    <input className={`${styles.submitButton}`} type="submit" value="Enviar" />
                </form>
            </div>
        </section>
    )
}