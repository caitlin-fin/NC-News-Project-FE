import "../styling/ArticlePage.css";

function CommentCard({ comment }) {
  return (
    <div className="comment-card">
      <strong>{comment.author}: </strong>
      <p>{comment.body}</p>
      <p>{comment.votes}</p>
    </div>
  );
}

export default CommentCard;
