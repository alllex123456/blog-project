import classes from './Posts.module.css';

import Image from 'next/image';
import PostItem from '../posts/PostItem';

const Posts = (props) => {
  const { posts } = props;

  return (
    <section className={classes.posts}>
      <h1>Featured Posts</h1>
      <ul className={classes.postsList}>
        {posts.map((post) => (
          <PostItem
            key={post.slug}
            data={{
              slug: post.slug,
              title: post.title,
              date: post.date,
              excerpt: post.excerpt,
              image: post.image,
            }}
          />
        ))}
      </ul>
    </section>
  );
};

export default Posts;
