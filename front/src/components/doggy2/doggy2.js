import React from 'react'
import styles from './doggy2.module.scss'
import P from '../../../public/P.png'
import Image from 'next/image';



export default function Doggy2() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textWrapper}>
                <div className={styles.title}>Trzymamy rękę na pulsie <div className={styles.dots}>...</div>
                </div>

                <div className={styles.description}>śledzimy trendy i najnowsze rozwiązania, tak aby każdy nasz projekt spełniał wymogi użytkowników i wyglądał estetycznie. Stawiamy na spójność i uniwersalny, ponadczasowy design.</div>
            </div>
            <div className={styles.absolute}>
                <Image
                    src={P}
                    alt='P'
                    className={styles.image} />
            </div>
        </div>
    )
}
