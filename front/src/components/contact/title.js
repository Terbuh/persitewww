import React from 'react'
import styles from './title.module.scss'
import Image from 'next/image'
import Big from '../../../public/BigSubtract.png'

export default function Title() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <div>Wyceń swój projekt<div className={styles.dot}>.</div></div>
            </div>
            <div className={styles.imageWrapper}>
                <Image
                    src={Big}
                    alt='Big'
                    className={styles.image} />
                <div className={styles.desc}>Wypełnij formularz i umów się na bezpłatną konsultację. Pomożemy Ci zaprojektować kompleksową stronę, stworzyć logo lub zbudować Brand od podstaw.</div>
            </div>
        </div>
    )
}
