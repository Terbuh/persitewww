import styles from './baner.module.scss';
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
                        <div className={styles.third}><div>Każda strona dopracowana do <div className={styles.per}>per</div>fekcji</div></div>
                    </section>
                    <div className={styles.question}>Co możemy dla Ciebie stworzyć?</div>
                </div>
            </div>
        </div>
    )
}
