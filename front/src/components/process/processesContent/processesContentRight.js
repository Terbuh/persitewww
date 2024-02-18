import React from 'react';
import styles from './processesRight.module.scss';
import subtract from '../../../../public/subtract2.png';
import Image from 'next/image';


export default function ProcessesContentRight() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                <div className={styles.subtractWrapper}>
                    <Image
                        src={subtract}
                        alt='kolorek'
                        className={styles.image2}
                    />
                    <div className={styles.absolute}>Indywidualna oferta</div>
                    <div className={styles.number}>2.</div>

                </div>
                <div className={styles.subtractTitleWrapper}>
                    <div className={styles.subtractTitle}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    </div>
                </div>
            </div>
            <div className={styles.titleWrapper}>
                <div className={styles.subtractWrapper}>
                    <Image
                        src={subtract}
                        alt='kolorek'
                        className={styles.image4}
                    />
                    <div className={styles.absolute}>Wdrożenie i realizacja</div>
                    <div className={styles.number}>4.</div>

                </div>
                <div className={styles.subtractTitleWrapper}>
                    <div className={styles.subtractTitle}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    </div>
                </div>

            </div>
        </div>
    )
}
