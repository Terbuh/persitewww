import Keys from '@/components/key_services/keys'
import NavBar from '@/components/navbar/navbar'
import WhatWeDo from '@/components/whatWeDo/whatWeDo'
import styles from './homestyles.module.scss'
import Baner from '@/components/baner/baner'
import Process from '@/components/process/process'
import Doggy from '@/components/doggy/doggy'


export default function Home() {
  return (

    <div className={styles.home}>
      <NavBar />
      <Baner />
      <WhatWeDo />
      <Keys />
      <Process />
      <Doggy />
    </div>

  )
}
