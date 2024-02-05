import styles from './baner.module.scss';
import baner from '../../../public/baner.png'
import Image from 'next/image';

import React from 'react'

export default function Baner() {
    return (

        <div className={styles.wrapper}>
            <Image
                src={baner}
                alt="baner"
                layout="responsive"
                width={1920}
                height={1080}
                style={{ width: '100%', height: '100%' }}
            />

        </div>
    )
}
