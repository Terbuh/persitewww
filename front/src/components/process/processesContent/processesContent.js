import React from 'react'
import styles from './processesContent.module.scss'
import subtract from '../../../../public/subtract.png'
import Image from 'next/image';


export default function ProcessesContent() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                <div className={styles.subtractWrapper}>
                    <Image
                        src={subtract}
                        alt='kolorek'
                        className={styles.image}
                    />
                    <div className={styles.absolute}>Konsultacje</div>
                    <div className={styles.number}>1.</div>

                </div>
                <div className={styles.subtractTitle}></div>
            </div>
        </div>
    )
}
