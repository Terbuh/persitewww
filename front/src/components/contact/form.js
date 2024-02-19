import React from 'react'
import Title from './title'
import styles from './form.module.scss'
import Checkbox from './checkbox'
import Image from 'next/image'
import P from '../../../public/greyP.png'
import { EmailInput } from './inputType'


export default function Form() {
    return (
        <div className={styles.main}>
            <div><Title /></div>
            <div className={styles.wrapperContent}>
                <div className={styles.wrapper}>

                    <div className={styles.firstColumns}>
                        <div className={styles.input}>
                            <EmailInput name='name' label='Powiedz nam jak się nazywasz' />
                        </div>
                        <div className={styles.input}>
                            <EmailInput name='phone' label='Twój numer kontaktowy' />
                        </div>
                    </div>
                    <div className={styles.mailInput}>
                        <EmailInput name='email' label='Mail kontaktowy (jeśli chciałbys mieć swoją domenę, to też to ogarniamy :) )' />
                    </div>
                    <div className={styles.descInput}>
                        <textarea
                            className={styles.inputDesc}
                            placeholder='Opisz nam swoją wizję' />
                    </div>
                    <Checkbox label="Wyrażam zgodę na otrzymywanie treści marketingowych i informacji handlowych od Icomseo Sp. z o.o. z wykorzystaniem środków komunikacji elektronicznej." />
                    <div className={styles.absolute}>
                        <Image
                            src={P}
                            alt='P'
                            className={styles.image} />
                    </div>
                    <div className={styles.absolute2}>
                        <Image
                            src={P}
                            alt='P'
                            className={styles.image2} />
                    </div>
                </div>
            </div>

        </div>
    )
}