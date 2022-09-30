import { Link } from "react-router-dom";
import "../styling/ArticleCard.css";
import { getIcon } from "../utils/icons";

function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <div className="topic-icon">{getIcon(article.topic)}</div>
      <Link to={`/articles/${article.article_id}`}>
        <p>{article.title}</p>
      </Link>
    </div>
  );
}
export default ArticleCard;
