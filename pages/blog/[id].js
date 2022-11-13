import { client } from "../../libs/client";
import styles from '../../styles/Page.module.scss';
import Common from '../../components/common'
import Header from '../../components/header';
import Date from '../../components/date';

export default function BlogId({ blog }) {
  return (
    <main className={styles.main}>
      <Common title={`${blog.title} | 田んぼ`} />
      <Header></Header>
      <div className={styles.content}>
        <div className='d-flex' style={{justifyContent: 'center', margin: '1rem 0'}}>
          <h1 className={styles.title}>{blog.title}</h1>
        </div>
        <div className='d-flex' style={{justifyContent: 'right', margin: '1rem 0'}}>
          <Date date={blog.publishedAt} classname = {styles.publishedAt} />
        </div>
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
