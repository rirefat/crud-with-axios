const Posts = ({ posts,onDeletePost,onEditClick }) => {
    return (
        <div style={{ marginBottom: "15px" }}>
            <h2>All Posts</h2>
            <div>
                <ul>
                    {
                        posts.map(post => (
                            <li key={post.id}>
                                <div>
                                    <span onClick={() => onDeletePost(post.id)}>❌</span>
                                    <span onClick={() => onEditClick(post)}>✏️</span>
                                </div>
                                <span id="serial">{post.id}</span>
                                <span>{post.title}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Posts;