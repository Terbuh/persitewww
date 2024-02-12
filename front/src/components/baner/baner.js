import styles from './baner.module.scss';
import baner from '../../../public/BanerMainsan.png'
import Image from 'next/image';

import React from 'react'

export default function Baner() {
    return (

        <div className={styles.wrapper}>
            <Image
                src={baner}
                alt="baner"
                style={{ width: '100%', height: '100%' }}
            />

        </div>
    )
}
