import styles from 'styles/page4.module.css'

export default function PAGE4() {
	return (
		<div className={styles.pc}>
    <div className={styles.pc_head}>
        <div className={styles.display_outer}>
            <div className={styles.display_inner}></div>
            <div className={styles.camera}></div>
        </div>
    </div>
    <div className={styles.pc_body}>
        <div className={styles.body_inner}>
            <div className={styles.hollow}></div>
        </div>
    </div>
</div>
	)
}

