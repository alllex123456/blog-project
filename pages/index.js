import { getFeaturedPosts } from '../lib/post-utils';

import Posts from '../components/home/Posts';

const HomePage = (props) => {
  return <Posts posts={props.posts} />;
};

export function getStaticProps() {
  const allPosts = getFeaturedPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default HomePage;
