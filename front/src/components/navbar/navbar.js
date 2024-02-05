'use client'
import React, { useState, useEffect } from 'react';
import styles from './navbar.module.scss';
import Image from 'next/image';
import BlackPersite from "../../../public/blackPersite.png";
import Black from "../../../public/A.png";



const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Sprawdź szerokość ekranu przy załadowaniu komponentu
        checkScreenWidth();

        // Dodaj event listener do obsługi zmiany rozmiaru okna
        window.addEventListener('resize', checkScreenWidth);

        // Odczyść event listener przy odmontowywaniu komponentu
        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    const checkScreenWidth = () => {
        // Ustaw flagę isMobile w zależności od szerokości ekranu
        setIsMobile(window.innerWidth < 800);
    };

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <div className={styles.logo}>
                    <Image
                        src={BlackPersite}
                        alt="logo"
                        width={40}

                    /></div>
                <div className={styles.black}>
                    <Image
                        src={Black}
                        alt="logo"
                        width={150}
                    />
                </div>
            </div>
            <div className={styles.navContainer}>
                <div className={styles.nav}>
                    <div className={styles.navButtons}>
                        <div>O nas</div>
                        <div>Korzyści</div>
                        <div>Proces projektowy</div>
                        <div>Kontakt</div>
                    </div>
                </div>
                <div className={styles.container}>
                    {isMobile && (
                        <>
                            <div className={`${styles.menuToggle} ${menuActive ? styles.active : ''}`} onClick={toggleMenu}>
                                <div className={`${styles.menuBar} ${styles.bar1}`}></div>
                                <div className={`${styles.menuBar} ${styles.bar2}`}></div>
                                <div className={`${styles.menuBar} ${styles.bar3}`}></div>
                            </div>

                            <div className={`${styles.menu} ${menuActive ? styles.active : ''}`}>
                                <div className={styles.closeButton} onClick={toggleMenu}>
                                    X
                                </div>
                                <a href="#">Home</a>
                                <a href="#">About</a>
                                <a href="#">Projects</a>
                            </div>


                        </>
                    )}
                </div>
                <div className={styles.contactContainer}>
                    <div className={styles.contactButton}>
                        <div className={styles.button}>Napisz do Nas</div>
                    </div>
                    <div className={styles.languageIcon}>
                        <div className={styles.circle}>
                        </div>
                        <div className={styles.language}>PL</div>
                    </div>
                </div>

            </div>


        </nav>
    );
};

export default Navbar;
