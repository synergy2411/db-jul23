import { useState, useRef } from "react";

const AddPost = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredBody, setEnteredBody] = useState("");

  const [isError, setIsError] = useState(false);

  const bodyInputRef = useRef();

  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);
  const bodyChangeHandler = (event) => setEnteredBody(event.target.value);

  const addPostClickHandler = (event) => {
    event.preventDefault();
    if (enteredTitle.trim() === "") {
      setIsError(true);
      return;
    } else {
      let newPost = {
        id: Math.round(Math.random() * 1000).toString(),
        title: enteredTitle,
        body: bodyInputRef.current.value,
      };
      props.addNewPost(newPost);
      setIsError(false);
    }
  };

  return (
    <div className="row">
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-body">
            <h4 className="text-center">Add New Post</h4>
            <form>
              {/* title - Controlled Component */}
              <div className="form-group mb-3">
                <label htmlFor="title">Title :</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={enteredTitle}
                  onChange={titleChangeHandler}
                />
                {isError && (
                  <p className="alert alert-danger">
                    - Title is mandatoy field.
                  </p>
                )}
              </div>
              {/* body - Uncontrolled Component */}
              <div className="form-group mb-3">
                <label htmlFor="body">Body</label>
                {/* <textarea
                  name="body"
                  className="form-control"
                  value={enteredBody}
                  onChange={bodyChangeHandler}
                /> */}
                <textarea
                  name="body"
                  className="form-control"
                  ref={bodyInputRef}
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
