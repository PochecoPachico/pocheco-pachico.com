import Link from "next/link";
import styles from '../styles/Profile.module.scss';
import Common from '../components/common';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Profile() {
  return (
    <main className={`${styles.main} container`}>
      <Common />
      <Header current='profile' />
      <div className={styles.content}>
      
        <div>
          <img src='/kaeru.jpg' width='200' height='200' className={ `${styles.icon} d-block mx-auto` } alt='icon' />
        </div>

        <div className='center-block'>
          <h1 className={'d-block mx-auto'}>ぽちぇこ</h1>
        </div>

        <div className="row justify-content-md-center">
          <div className={'col col-md-1'}>
            Twitter
          </div>
          <div className={'col-lg-auto'}>
            <Link href="https://twitter.com/PochecoPachico" target="_blank">PochecoPachico</Link>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className={'col col-md-1'}>
            GitHub
          </div>
          <div className={'col-lg-auto'}>
            <Link href="https://github.com/PochecoPachico" target="_blank">PochecoPachico</Link>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className={'col col-md-1'}>
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
  