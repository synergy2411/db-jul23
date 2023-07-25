import React from "react";

// Stateless Component
function Posts() {
  let post = {
    id: "p001",
    title: "React 101",
    body: "Awesome post",
  };

  return (
    <div className="container">
      <h2 className="display-4 text-center">My Post App</h2>
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-header">
              <h5 className="text-center">{post.title.toUpperCase()}</h5>
            </div>
            <div className="card-body">
              <p> {post.body}</p>
            </div>
          </div>
        </div>
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
