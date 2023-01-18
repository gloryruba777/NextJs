import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Index_component from '../components/indexComponents/IndexComponent'

export const Home = () => {
  return (
    <div className={styles.container}>
        <Index_component />
    </div>
  )
}
export default Home