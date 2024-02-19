import { useState } from "react";


const EditPost = ({ post }) => {
    const [title, setTitle] = useState(post.title)
    const [body, setBody] = useState(post.body)
    return (
        <>
            <h2>Edit Post:</h2>
            <form action="">
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    size={50}
                /> <br />
                <input
                    type="text"
                    id="content"
                    value={body}
                    size={50}
                    onChange={(event) => setBody(event.target.value)}
                /> <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default EditPost;