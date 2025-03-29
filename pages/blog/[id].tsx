import { client } from "../../libs/client";
import styles from '../../styles/Page.module.scss';
import Common from '../../components/common'
import Header from '../../components/header';
import Footer from '../../components/footer';
import Date from '../../components/date';
import type { GetStaticProps, GetStaticPaths } from 'next';

interface Blog {
  id: string;
  title: string;
  body: string;
  publishedAt: string;
}

interface BlogIdProps {
  blog: Blog;
}

export default function BlogId({ blog }: BlogIdProps) {
  return (
    <main className={`${styles.main}` + ' container'}>
      <Common title={`${blog.title} | 田んぼ`} />
      <Header />
      <div className={styles.content}>
        <div className='d-flex' style={{justifyContent: 'center', margin: '1rem 0'}}>
          <h1 className={styles.title}>{blog.title}</h1>
        </div>
        <div className='d-flex' style={{justifyContent: 'right', margin: '1rem 0'}}>
          <Date date={blog.publishedAt} classname={styles.publishedAt} />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
          className={styles.post}
        />
      </div>
      <Footer></Footer>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
}; 