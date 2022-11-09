import styles from '../styles/Home.module.scss';
import Common from '../components/common'
import Header from '../components/header';

export default function Profile() {
  return (
    <main className={styles.main}>
      <Common />
      <Header></Header>
      <p>今頑張って作っています。</p>
    </main>
  );
}
  