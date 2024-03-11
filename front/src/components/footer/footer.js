import React from 'react'
import styles from './footer.module.scss'
import Image from 'next/image'
import P from '../../../public/footerLogo.png'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image
                    src={P}
                    alt='logo'
                    className={styles.image} />
            </div>

            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <div className={styles.list}>
                        <ul className={styles.ul}>
                            <li className={styles.ulBold}>Persite Sp. Z. O. O.</li>
                            <li>Ul. Bla bla 12/39b</li>
                            <li>NIP: 0123456789</li>
                            <li>Kontakt:   </li>
                            <li>Email: <a href="mailto:kontakt@persite.it">kontakt@persite.it</a></li>
                            <li>Telefon: 345-567-789</li>

                        </ul>

                    </div>
                    <div className={styles.list}>
                        <ul className={styles.ulRight}>
                            <li className={styles.ulBold}><a href="https://www.instagram.com/persite.it" target="_blank">Instagram: @persite.it</a></li>
                            <li className={styles.ulBold}><a href="https://www.facebook.com/persite.it" target="_blank">Facebook: /persite.it</a></li>
                            <li className={styles.ulBold}><a href="https://www.linkedin.com/in/persite.it" target="_blank">LinkedIn: @persite.it</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerText}>Copyrights claim ...lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
            </div>
        </div>

    )
}
