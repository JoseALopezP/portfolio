import styles from './Portfolio.module.css'

export function SeeMoreProject (proj) {
    return (
        <div className={styles.projectCardBlock}>
            <h5>{`${proj.proj.pName}`}</h5>
        </div>
    )
}