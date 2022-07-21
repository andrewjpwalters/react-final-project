import React from "react";

function BlogPost({ title, id, content, onDeletePost }) {

    function handleDelete() {
        fetch(`http://localhost:3000/posts/${id}`, {
            method: "DELETE"
        })
        onDeletePost(id)
    }

    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={handleDelete}>Delete Post</button>
        </div>
    )
}

export default BlogPost;