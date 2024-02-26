// pages/index.js
import React from 'react';
import styles from './newProcess.module.scss'
import Image from 'next/image';
import subtract from '../../../public/subtract.png'



const NewProcess = () => {
    return (
        <div className={styles.container}>
            <div className={styles.gridContainer}>
                <div className={`${styles.gridItem} ${styles.full}`}> <div className={styles.titleWrapper}>
                    <div className={styles.subtractWrapper}>
                        <Image

                            src={subtract}
                            alt="kolorek"

                            width="100px"
                        />
                        <div className={styles.absolute}>Konsultacje</div>
                        <div className={styles.number}>1.</div>

                    </div>
                    <div className={styles.subtractTitle}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    </div>
                </div></div>
                <div className={`${styles.gridItem} ${styles.empty}`}>0</div>
                <div className={`${styles.gridItem} ${styles.empty}`}>0</div>
                <div className={`${styles.gridItem} ${styles.full}`}>X</div>
                <div className={`${styles.gridItem} ${styles.full}`}>X</div>
                <div className={`${styles.gridItem} ${styles.empty}`}>0</div>
                <div className={`${styles.gridItem} ${styles.empty}`}>0</div>
                <div className={`${styles.gridItem} ${styles.full}`}>X</div>
                <div className={`${styles.gridItem} ${styles.full}`}>X</div>
                <div className={`${styles.gridItem} ${styles.empty}`}>0</div>
            </div>
        </div>
    );
};

export default NewProcess;
