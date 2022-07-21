import React, { useState, useEffect } from "react";
import BlogPost from "./BlogPost";


function Blog() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/posts/")
            .then((r) => r.json())
            .then((data) => {
                setPosts(data)
            })
    }, []);

    const blogPost = posts.map((blogObj) => {
        return <BlogPost key={blogObj.id} title={blogObj.title} content={blogObj.content} />
    })
    return (
        <div>
            <h1>Hello from Blog!</h1>
            {blogPost}
        </div>
    )
}

export default Blog;