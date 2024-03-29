import Keys from '@/components/key_services/keys'
import NavBar from '@/components/navbar/navbar'
import WhatWeDo from '@/components/whatWeDo/whatWeDo'
import styles from './homestyles.module.scss'
import Baner from '@/components/baner/baner'
import Doggy from '@/components/doggy/doggy'
import Form from '@/components/contact/form'
import Footer from '@/components/footer/footer'
import NewProcess from '@/components/process/newProcess'
import Profits from '@/components/profit/profits'
import Doggy2 from '@/components/doggy2/doggy2'
import Faq from '@/components/faq/faq'

export default function Home() {
  return (
    <div className={styles.home}>
      <NavBar />
      <Baner />
      <div id="offer">
        <WhatWeDo />
        <Keys />
      </div>
      <Doggy />
      <div id="profits">
        <Profits />
      </div>
      <div id="process">
        <NewProcess />
      </div>
      <Doggy2 />
      <div id='contact'>
        <Form />
      </div>
      <div id='faq'>
        <Faq />
      </div>
      <Footer />
    </div>
  )
}
