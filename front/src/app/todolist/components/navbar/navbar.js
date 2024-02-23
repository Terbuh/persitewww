import styles from './navbar.module.scss';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <div className={styles.logo}>
                        <Image
                            src="/bluePersite.png"
                            alt="bluePersiteLogo"
                            width={40}
                            height={52}
                        /></div>
            </div>
            <div className={styles.navigationContainer}>
                <div className={styles.projectsButton}>
                    <div className={styles.projectsButtonText}>
                        Projects
                    </div>
                </div>
                <div className={styles.createButton}>
                    <div className={styles.createButtonText}>
                        Create
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;