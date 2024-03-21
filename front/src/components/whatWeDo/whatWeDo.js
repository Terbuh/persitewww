import styles from './whatWeDo.module.scss'

export default function WhatWeDo() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.whatWeDo}>Co robimy?</div>
            <div className={styles.description}>
                Zajmujemy się kompleksowym podejściem do tworzenia stron internetowych. Nasz zespół zajmuje się projektowaniem na każdym etapie. Od indywidualnego projektu strony, przez jej architewkture, aż po jej rozwój i funkcjonowanie. Stawiamy na indywidualne podejście oraz sprawną komunikację z klientem
            </div>
        </div>

    )
}
