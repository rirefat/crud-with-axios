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

  // Create Operation - Create a single post and send it to the server
  const handleAddPost = async (newPost) => {
    try {
      const id = posts.length
        ? Number(posts[posts.length - 1].id) + 1
        : 1;

      const finalPost = {
        id: id.toString(),
        ...newPost
      }
      const response = await axios.post("http://localhost:5000/posts", finalPost);
      setPosts([...posts, response.data])
    } catch (err) {
      setError(err.message);
    }
  }

  // Update Operation - Edit a single post and update it to the server also
  const handleEdit = (post) => {
    setEditPost(post);
  }
  const handleUpdatePost = async (updatedPost) => {
    try {
      const response = await axios.patch(`http://localhost:5000/posts/${updatedPost.id}`, updatedPost);
      const updatedPosts = posts.map(post =>
        post.id === response.data.id ? response.data : post
      );
      setPosts(updatedPosts);

    } catch (err) {
      setError(err.message);
    }
  }

  // Delete Operation - Delete a single post from the server
  const handleDelete = async (postId) => {
    let userResponse = confirm("Are you confirm to delete the post?");

    if (userResponse) {
      try {
        await axios.delete(`http://localhost:5000/posts/${postId}`);
        const newPosts = posts.filter((post) => post.id !== postId);
        setPosts(newPosts);
      }
      catch (err) {
        setError(err.message)
      }
    }
  }

  // Reading Operation - Read all the post from the server
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

    // calling fetchPost function
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
          (editPost) ? <EditPost post={editPost} onUpdatePost={handleUpdatePost} /> : <AddPost onAddPost={handleAddPost} />
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