import "../styling/ArticlePage.css";

function CommentCard({ comment }) {
  return (
    <div className="comment-card">
      <p className="comment-body">
        {""}
        <strong >{comment.author}:</strong>{" "}
        {comment.body}
      </p>
      {/* <p className="comment-body">{comment.body}</p> */}
      <p className="comment-votes">{comment.votes}</p>
    </div>
  );
}

export default CommentCard;
