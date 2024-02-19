// pages/index.js
import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.gridContainer}>
                <div className={`${styles.gridItem} ${styles.full}`}>X</div>
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

export default Home;
