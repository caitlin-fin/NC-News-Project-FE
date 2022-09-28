import { Link } from "react-router-dom";
import "../styling/ArticleCard.css";

function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <Link to={`/articles/${article.article_id}`}>
        <p>{article.title}</p>
      </Link>
    </div>
  );
}
export default ArticleCard;
