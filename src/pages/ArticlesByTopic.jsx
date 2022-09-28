import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import ArticlesList from "./ArticlesList";
import "../styling/Articles.css";

function ArticlesByTopic({ articles, setArticles }) {
  const { topic_slug } = useParams();

  useEffect(() => {
    getArticles(topic_slug).then(({ articles }) => {
      setArticles(articles);
    });
  }, [topic_slug, setArticles]);

  return (
    <div>
      <h2>Articles about {topic_slug}</h2>
      <div className="topic-nav-bar">
        <Link to="/articles" className="topic-link">
          Back to all articles
        </Link>
      </div>
      <ArticlesList articles={articles} />
    </div>
  );
}

export default ArticlesByTopic;
