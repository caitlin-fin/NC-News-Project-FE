import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticle } from "../utils/api";
import Votes from "../components/Votes";
import Comments from "../components/Comments";
import '../styling/ArticlePage.css'

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [voteCount, setVoteCount] = useState(0);

  useEffect(() => {
    getArticle(article_id).then((responseArticle) => {
      setArticle(responseArticle);
      setVoteCount(responseArticle.votes);
    });
  }, [article_id]);

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
        <Votes
          article={article}
          voteCount={voteCount}
          setVoteCount={setVoteCount}
        />
        <Comments />
      </div>
    </div>
  );
}
export default SingleArticle;
