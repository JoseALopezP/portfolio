import styles from './Presentation.module.css'

export function Presentation () {
    return (
        <>
            <div className={`${styles.holaSoy}`}>
                <p>¡Hola! Soy</p>
                <h3>José López</h3>
                <p><strong>&lt;</strong>Web Developer<strong>/&gt;</strong></p>
            </div>
        </>
    )
}