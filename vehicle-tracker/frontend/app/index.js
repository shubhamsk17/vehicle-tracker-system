import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Vehicle Transfer System</h1>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/drivers">
            <a>Drivers</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/vehicles">
            <a>Vehicles</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/transfers">
            <a>Transfers</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
