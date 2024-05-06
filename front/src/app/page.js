import NavBar from '@/components/navbar/navbar'
import styles from './homestyles.module.scss'
import Baner from '@/components/baner/baner'
import Services from '@/components/services/services'


export default function Home() {
  return (
    <div className={styles.home}>
      <NavBar />
      <Baner />
      <Services />
    </div>
  )
}
