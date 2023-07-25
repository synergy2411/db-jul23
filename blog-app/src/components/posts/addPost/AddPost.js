import { useState } from "react";

const AddPost = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredBody, setEnteredBody] = useState("");

  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);
  const bodyChangeHandler = (event) => setEnteredBody(event.target.value);

  const addPostClickHandler = (event) => {
    event.preventDefault();
    let newPost = {
      id: Math.round(Math.random() * 1000).toString(),
      title: enteredTitle,
      body: enteredBody,
    };
    props.addNewPost(newPost);
  };

  return (
    <div className="row">
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-body">
            <h4 className="text-center">Add New Post</h4>
            <form>
              {/* title */}
              <div className="form-group mb-3">
                <label htmlFor="title">Title :</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={enteredTitle}
                  onChange={titleChangeHandler}
                />
              </div>
              {/* body */}
              <div className="form-group mb-3">
                <label htmlFor="body">Body</label>
                <textarea
                  name="body"
                  className="form-control"
                  value={enteredBody}
                  onChange={bodyChangeHandler}
                />
              </div>
              {/* button */}
              <div className="form-group mb-3">
                <div className="d-grid">
                  <button
                    className="btn btn-success"
                    onClick={addPostClickHandler}
                  >
                    Add Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
