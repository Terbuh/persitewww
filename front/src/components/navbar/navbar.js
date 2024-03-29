'use client'
import React, { useState, useEffect } from 'react';
import styles from './navbar.module.scss';
import Image from 'next/image';
import BlackPersite from "../../../public/blackPersite.png";
import Black from "../../../public/A.png";
import Link from 'next/link'


const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeLink, setActiveLink] = useState('')

    useEffect(() => {
        checkScreenWidth();

        window.addEventListener('resize', checkScreenWidth);

        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    const checkScreenWidth = () => {
        setIsMobile(window.innerWidth < 800);
    };

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <nav className={`${styles.navbar} ${styles.sticky}`}>
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
                        <div>
                            <Link href="#offer">Oferta</Link>
                        </div>
                        <div>
                            <Link href="#profits">Korzyści</Link>
                        </div>
                        <div>
                            <Link href="#process">Proces projektowy</Link>
                        </div>
                        <div>
                            <Link href="#contact">Kontakt</Link>
                        </div>
                        <div>
                            <Link href="#faq">FAQ</Link>
                        </div>
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
                                <a href="#offer">Oferta</a>
                                <a href="#profits">Korzyści</a>
                                <a href="#process">Proces projektowy</a>
                                <a href="#contact">Kontakt</a>
                                <a href="#faq">FAQ</a>
                            </div>
                        </>
                    )}
                </div>
                <div className={styles.contactContainer}>
                    <div className={styles.contactButton}>
                        <Link href="#contact">
                            <div className={styles.button}>
                                Napisz do Nas
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
