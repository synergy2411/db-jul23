import React from "react";
import PostItem from "./postItem/PostItem";

// Stateless Component
function Posts() {
  let posts = [
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

  return (
    <div className="container">
      <h2 className="display-4 text-center">My Post App</h2>
      <div className="row">
        <PostItem post={posts[0]} />
        <PostItem post={posts[1]} />
        <PostItem post={posts[2]} />
      </div>
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
