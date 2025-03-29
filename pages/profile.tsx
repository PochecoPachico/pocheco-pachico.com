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
      
        <div>
          <Image src='/kaeru.jpg' width='200' height='200' className={ `${styles.icon} d-block mx-auto` } alt='icon' />
        </div>

        <div className="row justify-content-md-center">
          <h1 className={'col-md-auto'}>ぽちぇこ</h1>
        </div>

        <div className="row justify-content-md-center">
          <div className={'col-md-1'}>
            Twitter
          </div>
          <div className={'col-lg-auto'}>
            <Link href="https://twitter.com/PochecoPachico" target="_blank">PochecoPachico</Link>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className={'col-md-1'}>
            GitHub
          </div>
          <div className={'col-lg-auto'}>
            <Link href="https://github.com/PochecoPachico" target="_blank">PochecoPachico</Link>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className={'col-md-1'}>
            twitch
          </div>
          <div className={'col-lg-auto'}>
            <Link href="https://www.twitch.tv/pochecopachico" target="_blank">ぽちぇこ</Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}

export default Profile; 