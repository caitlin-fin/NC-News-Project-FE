import ArticleCard from "../components/ArticleCard";
import '../styling/Articles.css'

function Articles({ articles }) {
  return (
    <div className='article-list'>
      <h1>Articles</h1>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
}

export default Articles;
