import styles from "./keys.module.scss";
import React from 'react';
import Card from '@/components/key_services/cards/Card';
import { CORE_CONCEPTS } from '../../data/data';

const Keys = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textWrapper}>
                <div className={styles.title}>
                    Kluczowe usługi
                    {/* <div className={styles.dots}>...</div> */}
                </div>
            </div>
            <div className={styles.cardWrapper}>
                {CORE_CONCEPTS.map((data, index) => (
                    <Card
                        key={index}
                        image={data.image}
                        title={data.title}
                        description={data.description}
                    />
                ))}</div>

        </div>
    );
};

export default Keys;
