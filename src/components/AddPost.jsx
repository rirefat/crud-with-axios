import { useState } from "react";


const AddPost = ({ onAddPost }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = {
            title: title,
            body: body
        }
        onAddPost(newPost);
        setTitle("");
        setBody("");
    }

    return (
        <>
            <h2>Add New Post:</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="title"
                    size={50}
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Post Title"
                /> <br />
                <input
                    type="text"
                    id="content"
                    size={50}
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                    placeholder="Post's content / body"
                /> <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default AddPost;