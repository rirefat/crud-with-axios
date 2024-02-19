import { useEffect, useState } from 'react';
import './App.css';
import AddPost from './components/AddPost';
import Posts from './components/Posts';
import EditPost from './components/EditPost';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);
  const [error, setError] = useState(null);

  const handleEdit = (post) => {
    setEditPost(post);
  }

  const handleDelete = async (postId) => {
    let userResponse = confirm("Are you confirm to delete the post?");

    if (userResponse) {
      try {
        await axios.delete(`http://localhost:5000/posts/${postId}`)
      }
      catch (err) {
        setError(err.message)
      }
    }
  }
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/posts");
        if (response && response.data) {
          setPosts(response.data)
        }
      } catch (err) {
        setError(err.message)
      }
    }

    fetchPosts();
  }, [])

  return (
    <div>
      <h1>API Request with Axios</h1>
      <p>CRUD Operation using Axios</p>
      <hr /><hr />

      <Posts
        posts={posts}
        onEditClick={handleEdit}
        onDeletePost={handleDelete}
      />

      <hr /><hr />

      <>
        {
          (editPost) ? <EditPost post={editPost} /> : <AddPost />
        }
      </>

      <>
        {error && (
          <>
            <hr /><hr />
            <div className="error">{error}</div>
          </>
        )}
      </>
    </div>
  );
};

export default App;