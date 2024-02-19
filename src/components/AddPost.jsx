

const AddPost = () => {
    return (
        <>
            <h2>Add New Post:</h2>
            <form action="">
                <table>
                    <tr>
                        <td><label htmlFor="title">Title : </label></td>
                        <td><input type="text" id="title" size={50}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="content">Content : </label></td>
                        <td><input type="text" id="content" size={50}/></td>
                    </tr>
                    <tr>
                        <td>{""}</td>
                        <td><button type="submit">Submit</button></td>
                    </tr>
                </table>

            </form>
        </>
    );
};

export default AddPost;