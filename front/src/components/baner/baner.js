import styles from './baner.module.scss';
import background from '../../../public/background.png'
import Image from 'next/image';
import Logo from '../../../public/whiteLogo.png'
import React from 'react'

export default function Baner() {
    return (
        <div className={styles.baner}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <section className={styles.animation}>
                        <div className={styles.first}>
                            <div>
                                <Image
                                    src={Logo}
                                /></div>

                        </div>
                        <div className={styles.second}><div>Tworzymy dla Ciebie</div></div>
                        <div className={styles.third}><div>Najwyższa jakość <div className={styles.per}>per</div> twoja strona</div></div>
                    </section>
                    <div className={styles.question}>Co możemy dla Ciebie stworzyć?</div>
                </div>
            </div>
        </div>
    )
}
