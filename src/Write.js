import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function Write() {
    const history = useHistory();

    const [formData, setFormData] = useState({
        title: "",
        content: ""
    })

    function handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:3000/posts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                history.push('/blog')
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });;
    }

    function handleChange(event) {
        const key = event.target.id
        const value = event.target.value
        setFormData({
            ...formData,
            [key]: value
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Write a post:</h1>
            <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Write a title"
            />
            <textarea
                id="content"
                value={formData.content}
                onChange={handleChange}
                rows={10}
                cols={30}
                placeholder="Write a post"
                style={{ resize: "none" }}
            />
            <input type="submit" value="Post"
            />
        </form>

    )
}

export default Write;