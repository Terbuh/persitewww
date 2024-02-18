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
                        className={styles.image1}
                    />
                    <div className={styles.absolute}>Konsultacje</div>
                    <div className={styles.number}>1.</div>

                </div>
                <div className={styles.subtractTitle}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                </div>
            </div>
            <div className={styles.titleWrapper}>
                <div className={styles.subtractWrapper}>
                    <Image
                        src={subtract}
                        alt='kolorek'
                        className={styles.image3}
                    />
                    <div className={styles.absolute}>Proces projektowania</div>
                    <div className={styles.number}>3.</div>

                </div>
                <div className={styles.subtractTitle}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                </div>
            </div>
            <div className={styles.titleWrapper}>
                <div className={styles.subtractWrapper}>
                    <Image
                        src={subtract}
                        alt='kolorek'
                        className={styles.image5}
                    />
                    <div className={styles.absolute}>Przekazanie projektu</div>
                    <div className={styles.number}>5.</div>

                </div>
                <div className={styles.subtractTitle}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                </div>
            </div>
        </div>
    )
}
