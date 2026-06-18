const Post = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 150)}...</p>
      <span className="post-date">
        {new Date(post.createAt).toLocaleDateString()}
      </span>
    </div>
  );
};

export default Post;
