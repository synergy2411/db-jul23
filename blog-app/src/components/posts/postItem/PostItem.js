function PostItem(props) {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-header">
          <h5 className="text-center">{props.post.title.toUpperCase()}</h5>
        </div>
        <div className="card-body">
          <p className="text-center">{props.post.body}</p>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
