import React, { forwardRef } from 'react';
import styles from './test.module.scss'
import clsx from 'clsx';



export const EmailInput = forwardRef((props, ref) => {
    return (
        <div className={styles.inputGroup}>
            <input
                className={styles.inputField}
                ref={ref}
                maxLength={props.maxLength || 254}
                {...props}
                required
                type="text"
            />
            {props.label && <div className={clsx({
                [styles.label]: true,
                [styles.error]: props.error
            })}>
                {props.label}
            </div>}
            <div className={clsx({
                [styles.separationBar]: true,
                [styles.error]: props.error
            })}></div>
            {props.error && props.errorMessage && (
                <div className={styles.errorMessage}>
                    {props.errorMessage}
                </div>
            )}
        </div>
    );
});

EmailInput.displayName = "EmailInput"
