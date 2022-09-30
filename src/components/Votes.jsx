import { useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { patchArticleVotes } from "../utils/api";
import '../styling/ArticlePage.css'

function Votes({ article, voteCount, setVoteCount }) {
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
  }

  if (err) return <p>{err}</p>;

  return (
    <div className="article-votes">
      <p>Article likes: {voteCount}</p>
      <button className='vote-button' onClick={handleLike}>{<BiLike />}</button>
      <button className='vote-button' onClick={handleDislike}>{<BiDislike />}</button>
    </div>
  );
}
export default Votes;
