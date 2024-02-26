// Checkbox.jsx
"use client"
import { useState } from "react";
import styles from './check.module.scss';

const Checkbox = ({ label, setIsButtonChecked }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked((prev) => !prev);
        setIsButtonChecked((prev) => !prev);
    };

    return (
        <div className={styles.checkboxWrapper}>
            <label className={styles.labelWrapper}>
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className={isChecked ? styles.checked : ""} />
                <div className={`${styles.policy} ${isChecked ? styles.checkedPolicy : ""}`}>{label}</div>
            </label>
        </div>
    );
};

export default Checkbox;
