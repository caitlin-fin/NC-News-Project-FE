import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticle, patchArticleVotes } from "../utils/api";
import "../styling/Articles.css";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticle(article_id).then((responseArticle) => {
      setArticle(responseArticle);
    });
  }, [article_id]);

  function handleLike(event) {
    event.preventDefault();
    patchArticleVotes(article_id, 1).then((updatedArticle) => {
      setArticle(updatedArticle);
    });
  }

  function handleDislike(event) {
    event.preventDefault();
    patchArticleVotes(article_id, -1).then((updatedArticle) => {
      setArticle(updatedArticle);
    });
  }

  return (
    <div>
      <div className="topic-nav-bar">
        <Link to="/articles" className="topic-link">
          Back to all articles
        </Link>
      </div>
      <div className="article">
        <h1>{article.title}</h1>
        <h2>{article.author}</h2>
        <h3>{article.topic}</h3>
        <p>{article.body}</p>
        <div className="article-footer">
          <p>Article likes: {article.votes}</p>
          <button onClick={handleLike}>{`<3`}</button>
          <button onClick={handleDislike}>{`</3`}</button>
        </div>
      </div>
    </div>
  );
}
export default SingleArticle;
