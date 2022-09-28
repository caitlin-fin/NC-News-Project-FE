import "../styling/ArticleCard.css";
function ArticleCard({ article}) {

  return (
    <div className="article-card">
        <p>{article.title}</p>
    </div>
  );
}
export default ArticleCard;
