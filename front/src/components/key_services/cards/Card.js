import React from 'react';
import Image from 'next/image';
import styles from './card.module.scss'

const Card = ({ image, title, description }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={image} alt={title} className={styles.image} />
            </div>
            <div className={styles.cardTitle}>{title}</div>
            <div className={styles.cardDescription}>{description}</div>
        </div>
    );
};

export default Card;
