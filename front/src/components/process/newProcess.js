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
                    Proces projektowy obejmuje pięć kluczowych kroków.
                    Każdy etap jest starannie zaplanowany, zapewniając klientowi indywidualne podejście i satysfakcję z efektów końcowych.
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
                                W pierwszym kroku procesu projektowego przeprowadzamy szczegółowe konsultacje z Tobą.
                                Podczas tych spotkań omawiane są cele strony, preferencje designu, funkcje oraz wszelkie inne wymagania.
                                Konsultacje są kluczowe dla zrozumienia Twoich oczekiwań i dostosowania projektu do Ciebie.
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
                                Na podstawie zebranych informacji z konsultacji, tworzymy spersonalizowaną ofertę.
                                W dokładny sposób przedstawiamy zakres pracy, proponowane funkcje, harmonogram projektu oraz szacunkowe koszty.
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
                                Po zaakceptowaniu oferty, przechodzimy do fazy projektowania strony internetowej.
                                Tworzymy wireframe'y, czyli szkice układu strony, a następnie przystępujemy do projektowania graficznego.
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
                                Po zatwierdzeniu projektu przez Ciebie, przystępujemy do etapu wdrożenia.
                                Programiści implementują wszystkie funkcje strony, integrują niezbędne narzędzia oraz testują poprawność działania.
                                W tym czasie masz możliwość monitorowania postępu prac i zgłaszania ewentualnych poprawek.
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
                                Po pomyślnym zakończeniu procesu wdrożenia, następuje etap przekazania projektu.
                                W tym momencie udzielamy niezbędnej instrukcji dotyczącej zarządzania treściami na stronie, obsługi panelu administracyjnego oraz udzielamy wsparcia technicznego.
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
