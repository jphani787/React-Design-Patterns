import Post from "./Post";
const PostList = ({ posts }) => {
  return (
    <div className="user-posts">
      <h2>Recent Posts ({posts.length})</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="post-card">
            <Post post={post} />
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
