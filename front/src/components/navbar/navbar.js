'use client'
import React, { useState, useEffect } from 'react';
import styles from './navbar.module.scss';
import Image from 'next/image';
import NavbarLogo from '../../../public/navbarLogo.png';


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
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image
                    src={NavbarLogo}
                    alt="logo"
                /></div>
            <div className={styles.navContainer}>
                <div className={styles.nav}>
                    <div className={styles.navButtons}>
                        <div>
                            Oferta
                        </div>
                        <div>
                            Proces projektowy
                        </div>
                        <div>
                            Kontakt
                        </div>
                        <div>
                            FAQ
                        </div>
                    </div>
                </div>

                <div className={styles.contactContainer}>
                    <div className={styles.contactButton}>
                        <div className={styles.button}>
                            Bezpłatna wycena
                        </div>
                    </div>
                    <div className={styles.language}>EN</div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
