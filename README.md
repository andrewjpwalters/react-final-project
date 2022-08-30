# YouBlog by Andrew Walters

Phase 2 final project for Flatiron School

## Installation

Run npm install to install dependencies:

```bash
npm install
```

Start the JSON: 

```bash
json-server --watch db.json
```

Start the application:

```bash
npm start
```

## Usage

This is a SPA blog made with React using 5 components. It utilizes a JSON server to persist the blog posts. To write a post, navigate to the "Write" tab or "/write" in the address bar. The "Write" form is a controlled form. Clicking "post" will send the post to the JSON sever and programmatically reroute the user to the "Blog Feed" route (which can also be accessed in the navbar and at the "/blog" route) where all the saved posts will be displayed. Posts can then be deleted from the JSON server by clicking the "Delete" button on the appropriate post. 

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgements

Photo by Patrick Fore on Unsplash (https://unsplash.com/photos/0gkw_9fy0eQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

React Router (https://reactrouter.com/en/main)

React Bootstrap (https://react-bootstrap.github.io/)

React Router Bootstrap (https://github.com/react-bootstrap/react-router-bootstrap)