import React, { useState } from "react";
import PostItem from "./postItem/PostItem";
import AddPost from "./addPost/AddPost";

let INITIAL_POSTS = [
  {
    id: "p001",
    title: "React 101",
    body: "Awesome post",
  },
  {
    id: "p002",
    title: "React Beginners",
    body: "I like it",
  },
  {
    id: "p003",
    title: "Advance React",
    body: "I luv this course",
  },
];
// Stateless Component
function Posts() {
  const [toggle, setToggle] = useState(false);
  const [posts, setPosts] = useState(INITIAL_POSTS);

  const addPostClickHandler = () => {
    setToggle(!toggle); // Re-render the component
    // toggle = !toggle;            // NEVER DO THIS EVER
  };

  const addNewPost = (newPost) => {
    // posts.push(newPost);            // NEVER MUTATE THE STATE
    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setToggle(false);
  };

  const deletePost = (postId) => {
    setPosts((prevPosts) => {
      return prevPosts.filter((post) => post.id !== postId);
    });
  };

  return (
    <div className="container">
      <h2 className="display-4 text-center">My Post App</h2>

      <div className="row mb-4">
        <div className="offset-4 col-4">
          <div className="d-grid">
            <button className="btn btn-secondary" onClick={addPostClickHandler}>
              Add Post
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        {posts.map((post) => (
          <PostItem post={post} key={post.id} deletePost={deletePost} />
        ))}
      </div>

      {toggle && <AddPost addNewPost={addNewPost} />}
    </div>
  );
}

// Stateful Components
// class Posts extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Class based component!!</h2>
//       </div>
//     );
//   }
// }

export default Posts;
