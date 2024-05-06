import React from 'react'
import styles from './services.module.scss'
import Image from 'next/image';
import Monitor from '../../../public/Monitor.png'

export default function Services() {
    return (
        <div>
            <div className={styles.title}>
                Nasze usługi
            </div>
            <div className={styles.services}>
                <div className={styles.service}>
                    <div className={styles.image}>
                        <Image
                            src={Monitor} />
                    </div>
                </div>
            </div>
        </div>
    )
}
