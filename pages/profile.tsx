import Link from "next/link";
import Image from 'next/image';
import styles from '../styles/Profile.module.scss';
import Common from '../components/common';
import Header from '../components/header';
import Footer from '../components/footer';
import type { NextPage } from 'next';

const Profile: NextPage = () => {
  return (
    <main className={`${styles.main} container`}>
      <Common />
      <Header current='profile' />
      <div className={styles.content}>
        <Image src='/kaeru.jpg' width='200' height='200' className={ `${styles.icon} d-block mx-auto` } alt='icon' />

        <h1 className={`${styles.name} text-center`}>ぽちぇこ</h1>

        <div className={styles.links}>
          <div className={styles.linkRow}>
            <span className={styles.linkLabel}>Twitter</span>
            <Link href="https://twitter.com/PochecoPachico" target="_blank" className={styles.linkValue}>PochecoPachico</Link>
          </div>
          <div className={styles.linkRow}>
            <span className={styles.linkLabel}>GitHub</span>
            <Link href="https://github.com/PochecoPachico" target="_blank" className={styles.linkValue}>PochecoPachico</Link>
          </div>
          <div className={styles.linkRow}>
            <span className={styles.linkLabel}>Twitch</span>
            <Link href="https://www.twitch.tv/pochecopachico" target="_blank" className={styles.linkValue}>ぽちぇこ</Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}

export default Profile; 