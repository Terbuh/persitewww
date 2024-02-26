import Keys from '@/components/key_services/keys'
import NavBar from '@/components/navbar/navbar'
import WhatWeDo from '@/components/whatWeDo/whatWeDo'
import styles from './homestyles.module.scss'
import Baner from '@/components/baner/baner'
import Process from '@/components/process/process'
import Doggy from '@/components/doggy/doggy'
import Form from '@/components/contact/form'
import Footer from '@/components/footer/footer'



export default function Home() {
  return (

    <div className={styles.home}>
      <NavBar />
      <Baner />
      <div id="offer">
        <WhatWeDo />
        <Keys />
      </div>
      <div id="process">
        <Process />
      </div>
      <Doggy />
      <div id='contact'>
        <Form />
      </div>
      <Footer />
    </div>

  )
}
