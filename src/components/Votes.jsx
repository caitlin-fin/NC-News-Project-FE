import { useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { patchArticleVotes } from "../utils/api";

function Votes({ article, setArticle, voteCount, setVoteCount }) {
  const [err, setErr] = useState(null);

  function handleLike(event) {
    event.preventDefault();
    setVoteCount((voteCount) => voteCount + 1);
    setErr(null);
    patchArticleVotes(article.article_id, 1)
      .catch((err) => {
        setVoteCount((voteCount) => voteCount - 1);
        setErr("Something went wrong!");
      })
      .then((updatedArticle) => {
        setArticle(updatedArticle);
      });
  }

  function handleDislike(event) {
    event.preventDefault();
    setVoteCount((voteCount) => voteCount - 1);
    setErr(null);
    patchArticleVotes(article.article_id, -1)
      .catch((err) => {
        setVoteCount((voteCount) => voteCount - 1);
        setErr("Something went wrong!");
      })
      .then((updatedArticle) => {
        setArticle(updatedArticle);
      });
  }

  if (err) return <p>{err}</p>;

  return (
    <div className="article-votes">
      <p>Article likes: {voteCount}</p>
      <button onClick={handleLike}>{<BiLike />}</button>
      <button onClick={handleDislike}>{<BiDislike />}</button>
    </div>
  );
}
export default Votes;
