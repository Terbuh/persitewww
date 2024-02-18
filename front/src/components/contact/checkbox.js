'use client'
import { useState } from "react";
import styles from './check.module.scss'

const Checkbox = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className={styles.checkboxWrapper}>
            <label className={styles.labelWrapper}>
                <input type="checkbox" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)} className={isChecked ? styles.checked : ""} />
                <div className={styles.policy}>{label}</div>
            </label>
        </div>
    );
};
export default Checkbox;