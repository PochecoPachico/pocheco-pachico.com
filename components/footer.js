import Link from "next/link";
import styles from '../styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <Link href={'/'} className={'text-muted'}>田んぼ</Link>
        </div>
    </footer>
  )
}