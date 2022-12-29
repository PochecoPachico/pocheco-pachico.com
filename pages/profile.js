import styles from '../styles/Home.module.scss';
import Common from '../components/common';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Profile() {
  return (
    <main className={`${styles.main}` + ' container'}>
      <Common />
      <Header></Header>
      <p>今頑張って作っています。</p>
      <Footer></Footer>
    </main>
  );
}
  