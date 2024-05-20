import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className={styles.grid}>
      <Link href="/About">About</Link>
      <Link href="/Connect">Connect</Link>
      <Link href="#Experince">Experience</Link>
      <Link href="#Bio">Bio</Link>
    </div>
    )
}