import Keys from '@/components/key_services/keys'
import NavBar from '@/components/navbar/navbar'
import WhatWeDo from '@/components/whatWeDo/whatWeDo'
import styles from './homestyles.module.scss'
import Baner from '@/components/baner/baner'


export default function Home() {
  return (

    <div className={styles.home}>
      <NavBar />
      <Baner />
      <WhatWeDo />
      <Keys />
    </div>

  )
}
