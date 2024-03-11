// pages/index.js
import React from 'react';
import styles from './newProcess.module.scss'
import Image from 'next/image';
import subtract from '../../../public/Subtract.png'
import subtract2 from '../../../public/SubtractRight.png'
import line from '../../../public/line.png'



const NewProcess = () => {
    return (
        <div className={styles.container}>
            <div className={styles.line}>
                <Image
                    src={line}
                    alt='line' />
            </div>
            <div className={styles.mainTitleWrapper}>
                <div className={styles.textWrapper}>
                    <div className={styles.title}>
                        Proces projektowy
                        <div className={styles.dots}>...</div>
                    </div>
                </div>
                <div className={styles.descriptionWrapper}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                </div>
            </div>
            <div className={styles.gridContainer}>
                <div className={`${styles.gridItem} ${styles.full}`}>
                    <div className={styles.titleWrapper}>
                        <div className={styles.imageNumberWrapper}>
                            <div className={styles.subtractWrapper}>
                                <Image
                                    src={subtract}
                                    alt="kolorek"
                                    width="100px"
                                    className={styles.imageLeft}
                                />
                                <div className={styles.absolute}>Konsultacje</div>
                                <div className={styles.number}>
                                    <div className={styles.numberDiv}>
                                        <div className={styles.numberNumber}>1</div>
                                    </div>
                                    <div className={styles.numberDot}>.</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imageNumberWrapper}>
                            <div className={styles.subtractTitle}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                            </div>
                        </div>

                    </div>
                </div>
                <div className={`${styles.gridItem} ${styles.empty}`}></div>
                <div className={`${styles.gridItem} ${styles.empty}`}></div>
                <div className={`${styles.gridItem} ${styles.full}`}>
                    <div className={styles.titleWrapper}>
                        <div className={styles.imageNumberWrapperRight}>
                            <div className={styles.subtractWrapperRight}>
                                <Image
                                    src={subtract2}
                                    alt="kolorek"
                                    width="100px"
                                    className={styles.imageRight}
                                />
                                <div className={styles.absoluteRight}>Indywidualna oferta</div>
                                <div className={styles.numberRight}>
                                    <div className={styles.numberDiv}>
                                        <div className={styles.numberNumber}>2</div>
                                    </div>
                                    <div className={styles.numberDot}>.</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imageNumberWrapperRight}>
                            <div className={styles.subtractTitleRight}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.gridItem} ${styles.full}`}>
                    <div className={styles.titleWrapper}>
                        <div className={styles.imageNumberWrapper}>
                            <div className={styles.subtractWrapper}>
                                <Image
                                    src={subtract}
                                    alt="kolorek"
                                    width="100px"
                                    className={styles.imageLeft}
                                />
                                <div className={styles.absoluteLong}>Proces projektowania</div>
                                <div className={styles.number}>
                                    <div className={styles.numberDiv}>
                                        <div className={styles.numberNumber}>3</div>
                                    </div>
                                    <div className={styles.numberDot}>.</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imageNumberWrapper}>
                            <div className={styles.subtractTitle}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.gridItem} ${styles.empty}`}></div>
                <div className={`${styles.gridItem} ${styles.empty}`}></div>
                <div className={`${styles.gridItem} ${styles.full}`}>
                    <div className={styles.titleWrapper}>
                        <div className={styles.imageNumberWrapperRight}>
                            <div className={styles.subtractWrapperRight}>
                                <Image
                                    src={subtract2}
                                    alt="kolorek"
                                    width="100px"
                                    className={styles.imageRight}
                                />
                                <div className={styles.absoluteRight}>Wdrożenie i realizacja</div>
                                <div className={styles.numberRight}>
                                    <div className={styles.numberDiv}>
                                        <div className={styles.numberNumber}>4</div>
                                    </div>
                                    <div className={styles.numberDot}>.</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imageNumberWrapperRight}>
                            <div className={styles.subtractTitleRight}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.gridItem} ${styles.full}`}>
                    <div className={styles.titleWrapper}>
                        <div className={styles.imageNumberWrapper}>
                            <div className={styles.subtractWrapper}>
                                <Image
                                    src={subtract}
                                    alt="kolorek"
                                    width="100px"
                                    className={styles.imageLeft}
                                />
                                <div className={styles.absoluteLong}>Przekazanie projektu</div>
                                <div className={styles.number}>
                                    <div className={styles.numberDiv}>
                                        <div className={styles.numberNumber}>5</div>
                                    </div>
                                    <div className={styles.numberDot}>.</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imageNumberWrapper}>
                            <div className={styles.subtractTitle}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.gridItem} ${styles.empty}`}></div>
            </div>
        </div>
    );
};

export default NewProcess;
