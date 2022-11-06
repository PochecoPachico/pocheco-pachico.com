import { client } from "../../libs/client";
import styles from '../../styles/Page.module.scss';
import Header from '../../components/header';

export default function BlogId({ blog }) {
  return (
    <main className={styles.main}>
      <Header></Header>
      <div className={styles.content}>
        <div className='d-flex' style={{justifyContent: 'center', margin: '1rem 0'}}>
          <h1 className={styles.title}>{blog.title}</h1>
        </div>
        <div className='d-flex' style={{justifyContent: 'right', margin: '1rem 0'}}><p className={styles.publishedAt}>{blog.publishedAt}</p></div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
          className={styles.post}
        />
      </div>
    </main>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
