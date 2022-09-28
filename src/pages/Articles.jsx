import ArticleCard from "../components/ArticleCard";

function Articles({ articles }) {
  return (
    <div>
      <h1>Articles</h1>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
}

export default Articles;
