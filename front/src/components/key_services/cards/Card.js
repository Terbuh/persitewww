'use client'
import React, { useState } from 'react';
import styles from './card.module.scss';

const Card = ({ image, title, description }) => {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div className={styles.wrapper} onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>
            <div className={styles.card}>
                <div className={styles.imageWrapper}>
                    <img src={image} alt={title} className={styles.image} />
                </div>
                <div className={styles.cardTitle}>{title}</div>

            </div>
            {showDescription &&
                <div className={styles.cardDescription}>
                    {description}
                </div>}
        </div>
    );
};

export default Card;
