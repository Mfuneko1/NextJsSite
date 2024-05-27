import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Button() {
  return (
    <div className={styles.grid}>
      <Link href="/Connect">Connect</Link>
      <Link href="/Experince">Experience</Link>
      <Link href="/profile">Bio</Link>
    </div>
    );
}