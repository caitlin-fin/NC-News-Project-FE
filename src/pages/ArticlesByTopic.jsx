import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import Articles from "./Articles";

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
      <Link to="/articles">
        <button>Back to all articles</button>
      </Link>
      <Articles articles={articles} />
    </div>
  );
}

export default ArticlesByTopic;
