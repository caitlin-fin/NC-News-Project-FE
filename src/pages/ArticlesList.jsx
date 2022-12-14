import ArticleCard from "../components/ArticleCard";
import "../styling/Articles.css";

function ArticlesList({ articles }) {
  return (
    <div className="article-list">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
}

export default ArticlesList;
