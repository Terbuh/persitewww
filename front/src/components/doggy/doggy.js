import React from 'react'
import styles from './doggy.module.scss'
import P from '../../../public/P.png'
import Image from 'next/image';



export default function Doggy() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textWrapper}>
                <div className={styles.title}>Robimy strony internetowe
                </div>
                <div className={styles.title}>
                    dla każdego <div className={styles.dots}>...</div></div>

                <div className={styles.description}>nie zależnie od tego czy potrzebujesz landing page, sklepu, strony z Twoim portfolio czy strony kontaktowej. Sprawimy, że Twoi odbiorcy będą łatwo i intuicyjnie poruszać się po niej.</div>
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
