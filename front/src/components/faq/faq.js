'use client'
import React, { useState } from 'react';
import styles from './faq.module.scss';
import Image from 'next/image';
import Arrow from '../../../public/arrow.png';
import mockData from './mockData';

export default function Faq() {
    const [answerVisible, setAnswerVisible] = useState(mockData.map(() => false));

    const toggleAnswerVisibility = (index) => {
        setAnswerVisible((prev) =>
            prev.map((value, i) => (i === index ? !value : false))
        );
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.textWrapper}>
                <div className={styles.title}>
                    FAQ
                    <div className={styles.dots}>?</div>
                </div>
            </div>
            <div className={styles.faq}>
                {mockData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`${styles.questionWrapper} ${answerVisible[index] ? styles.active : ''}`}
                        onClick={() => toggleAnswerVisibility(index)}
                    >
                        <div className={styles.flex}>
                            <div className={styles.number}>{item.id}<div className={styles.dot}>.</div></div>
                            <div className={styles.question}>{item.question}</div>
                            <div className={styles.absolute}>
                                <Image
                                    src={Arrow}
                                    alt='arrow'
                                    className={styles.arrow}
                                    width={30}
                                />
                            </div>
                        </div>

                        {answerVisible[index] && (
                            <div className={styles.answer}>
                                <div className={styles.text}>{item.answer}</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
