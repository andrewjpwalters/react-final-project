import React from "react";
import Card from "react-bootstrap/Card"
import 'bootstrap/dist/css/bootstrap.min.css'

function BlogPost({ title, id, content, onDeletePost }) {

    function handleDelete() {
        fetch(`http://localhost:3000/posts/${id}`, {
            method: "DELETE"
        })
        onDeletePost(id)
    }

    return (
        <Card body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{content}</Card.Text>
            <button className="btn btn-outline-dark btn-sm" onClick={handleDelete}>Delete Post</button>
        </Card>
    )
}

export default BlogPost;