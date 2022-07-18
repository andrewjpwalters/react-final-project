import React from "react";
import BlogPost from "./BlogPost";

const post = [
    { id: 1, title: "Post 1", content: "This is post 1" },
    { id: 2, title: "Post 2", content: "This is post 2" },
    { id: 3, title: "Post 3", content: "This is post 3" }
]

function Blog() {

    const blogPost = post.map((blogObj) => {
        return <BlogPost id={blogObj.id} title={blogObj.title} content={blogObj.content} />
    })
    return (
        <div>
            <h1>Hello from Blog!</h1>
        </div>
    )
}

export default Blog;