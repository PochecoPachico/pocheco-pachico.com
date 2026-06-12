import Link from "next/link";
import styles from '../styles/Card.module.scss';
import Date from './date';

interface Blog {
  id: string;
  title: string;
  publishedAt: string;
  category: {
    name: string;
  };
}

interface CardProps {
  blog: Blog;
}

export default function Card({ blog }: CardProps) {
  return (
    <div className={`${styles.card}` + ' card'}>
      <Link href={`/blog/${blog.id}`}>
        <div className="card-body">
          <div>
            <span className={styles.site}>pocheco-pachico.com</span>
          </div>
          <div style={{marginTop: '0.75rem'}}>
            <h5 className={`card-title ${styles.title}`}>{blog.title}</h5>
          </div>
          <div className='d-flex' style={{justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem'}}>
            <span className={styles.category}>{blog.category.name}</span>
            <Date date = {blog.publishedAt} classname = {styles.date} />
          </div>
        </div>
      </Link>
    </div>
  )
} 