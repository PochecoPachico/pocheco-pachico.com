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
            <span>pocheco-pachico.com</span>
          </div>
          <div style={{marginTop: '1rem'}}>
            <h5 className="card-title">{blog.title}</h5>
          </div>
          <div className='d-flex' style={{justifyContent: 'space-between', marginTop: '1rem'}}>
            <p className="card-subtitle">{blog.category.name}</p>
            <Date date = {blog.publishedAt} classname = {"card-text"} />
          </div>
        </div>
      </Link>
    </div>
  )
} 