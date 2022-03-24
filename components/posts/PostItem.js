import classes from './PostItem.module.css';

import Image from 'next/image';
import Link from 'next/link';

const PostItem = (props) => {
  const { slug, title, date, image, excerpt } = props.data;
  const linkPath = `/posts/${slug}`;
  return (
    <Link href={linkPath}>
      <a>
        <li className={classes.post}>
          <Image
            src={`/images/${image}`}
            width={250}
            height={150}
            layout="responsive"
          />
          <div className={classes.content}>
            <h3>{title}</h3>
            <date className={classes.date}>{date}</date>
            <p className={classes.excerpt}>{excerpt}</p>
          </div>
        </li>
      </a>
    </Link>
  );
};

export default PostItem;
