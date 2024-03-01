import styles from "./profits.module.scss"
import React from 'react';
import Card from '@/components/key_services/cards/Card';
import { CORE_CONCEPTS1, CORE_CONCEPTS2 } from '../../data/mock'

const Profits = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textWrapper}>
                <div className={styles.title}>
                    Korzyści
                    <div className={styles.dots}>...</div>
                </div>
                <div className={styles.description}>Kompleksowe projektowanie i developing stron internetowych z doświadczonym zespołem, innowacyjnym podejściem i konkurencyjnymi cenami</div>
            </div>
            <div className={styles.cardWrapper}>
                {CORE_CONCEPTS1.map((data, index) => (
                    <Card
                        key={index}
                        image={data.image}
                        title={data.title}
                        description={data.description}
                    />
                ))}
            </div>
            <div className={styles.cardWrapper}>
                {CORE_CONCEPTS2.map((data, index) => (
                    <Card
                        key={index}
                        image={data.image}
                        title={data.title}
                        description={data.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Profits;
