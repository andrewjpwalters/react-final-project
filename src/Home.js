import React from "react";
import { Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import image from './img/patrick-fore-0gkw_9fy0eQ-unsplash.jpg'

function Home() {
    return (
        <>
            <h1>Hello from Home</h1>
            <Image fluid src={image} />
        </>
    )
}

export default Home