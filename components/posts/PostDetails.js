import classes from './PostDetails.module.css';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
const PostDetails = (props) => {
  const { title, image, date, content } = props;

  const imagePath = `/images/${image}`;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  });

  return (
    <section className={classes.details}>
      <div className={classes.image}>
        <Image src={imagePath} width={700} height={500} />
      </div>
      <div className={classes.content}>
        <h2>{title}</h2>
        <date>{formattedDate}</date>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </section>
  );
};

export default PostDetails;
