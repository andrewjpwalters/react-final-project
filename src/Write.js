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
        <>
            <h1 className="text-center">Write Your Heart Out</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Write a title"
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        id="content"
                        value={formData.content}
                        onChange={handleChange}
                        placeholder="Write a post"
                        style={{ height: "300px", resize: "none" }}
                    />
                </div>
                <button type="submit" className="btn btn-outline-dark">Post</button>
            </form>
        </>

    )
}

export default Write;