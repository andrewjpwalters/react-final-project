import React, { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import 'bootstrap/dist/css/bootstrap.min.css'


function Blog() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/posts/")
            .then((r) => r.json())
            .then((data) => {
                setPosts(data)
            })
    }, []);

    function deletePost(id) {
        const updatedPosts = posts.filter(post => post.id !== id)
        setPosts(updatedPosts)
    }

    const blogPost = posts.map((blogObj) => {
        return <BlogPost
            key={blogObj.id}
            id={blogObj.id}
            title={blogObj.title}
            content={blogObj.content}
            onDeletePost={deletePost} />
    })

    return (
        <div>
            <h1 className="text-center">Blog Feed</h1>
            {blogPost}
        </div>
    )
}

export default Blog;