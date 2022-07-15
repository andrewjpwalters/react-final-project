import React, { useState } from 'react';

function Write() {
    const [formData, setFormData] = useState({
        title: "",
        content: ""
    })

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
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
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleChange}
            />
            <textarea
                id="content"
                value={formData.content}
                onChange={handleChange}
                rows={10}
                cols={30}
                placeholder="Test"
                style={{ resize: "none" }}
            />
            <input type="submit" value="Post"
            />
        </form>

    )
}

export default Write;