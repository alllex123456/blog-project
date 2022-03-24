import PostDetails from '../../components/posts/PostDetails';
import { getAllPosts } from '../../lib/post-utils';

const PostDetailPage = (props) => {
  const { post } = props;
  return (
    <PostDetails
      title={post.title}
      image={post.image}
      date={post.date}
      content={post.content}
    />
  );
};

export function getStaticPaths() {
  const allPosts = getAllPosts();
  const postPaths = allPosts.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths: postPaths,
    fallback: false,
  };
}

export function getStaticProps(context) {
  const id = context.params.slug;
  const allPosts = getAllPosts();
  const post = allPosts.find((post) => post.slug === id);

  return {
    props: {
      post,
    },
  };
}

export default PostDetailPage;
