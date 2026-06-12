import styles from '../styles/Page.module.scss';
import Common from '../components/common';
import Header from '../components/header';
import Footer from '../components/footer';
import type { NextPage } from 'next'

const Custom404: NextPage = () => {
  return (
    <main className={`${styles.main} container`}>
      <Common title="ページが見つかりません | 田んぼ" />
      <Header />
      <div className="text-center" style={{ padding: '4rem 0' }}>
        <p>ページがありません。</p>
      </div>
      <Footer></Footer>
    </main>
  );
}

export default Custom404 