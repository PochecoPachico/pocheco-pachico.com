import { client } from "../libs/client";
import styles from '../styles/Home.module.scss';
import Common from '../components/common'
import Header from '../components/header';
import Card from '../components/card';

export default function Home({ blog }) {
  return (
    <main className={styles.main}>
      <Common title="田んぼ"/>
      <Header></Header>
      <div className="row">
        {blog.map((blog) => (
          <div className={`${styles.cardContainer}` + ' col-sm-6'} key={blog.id}>
            <Card blog={blog}></Card>
          </div>
        ))}
      </div>
    </main>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};
