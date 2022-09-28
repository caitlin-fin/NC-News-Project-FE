import { useEffect } from "react";
import Articles from "../pages/Articles";
import { getArticles } from "../utils/api";
import TopicList from "../components/TopicList";

function ArticleProvider({ articles, setArticles }) {
  useEffect(() => {
    getArticles().then(({ articles }) => {
      setArticles(articles);
    });
  }, [setArticles]);

  return (
    <div>
      <h1>Articles</h1>
      <TopicList />
      <Articles articles={articles} />
    </div>
  );
}
export default ArticleProvider;
