import { useState } from "react";


const EditPost = ({ post }) => {
    const [title, setTitle] = useState(post.title)
    const [body, setBody] = useState(post.body)
    return (
        <>
            <h2>Edit Post:</h2>
            <form action="">
                <table>
                    <tr>
                        <td><label htmlFor="title">Title : </label></td>
                        <td><input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            size={50}
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="content">Content : </label></td>
                        <td><input
                            type="text"
                            id="content"
                            value={body}
                            size={50}
                            onChange={(event) => setBody(event.target.value)}
                        /></td>
                    </tr>
                </table>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default EditPost;