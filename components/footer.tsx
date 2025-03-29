import Link from "next/link";
import styles from '../styles/Footer.module.scss';
import type { NextPage } from 'next';

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <Link href={'/'} className={'text-muted'}>田んぼ</Link>
        </div>
    </footer>
  )
}

export default Footer; 