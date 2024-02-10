import baner from '../../../public/computerWriting.png'
import Image from 'next/image';
import React from 'react'
import styles from './process.module.scss'
import ProcessesContent from './processesContent/processesContent';
import ProcessesContentRight from './processesContent/processesContentRight';

export default function Process() {
    return (

        <div className={styles.wrapper}>
            <div className={styles.leftSide}>
                <div className={styles.headerWrapper}>
                    <div className={styles.title}>Proces projektowy</div>
                    <div className={styles.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut </div>
                </div>
                <div className={styles.subsection}>
                    <ProcessesContent />
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={baner}
                        alt="baner"
                        width={600}
                    />
                </div>
                <div className={styles.subsection}>
                    <ProcessesContentRight />
                </div>
            </div>
        </div>
    )
}
