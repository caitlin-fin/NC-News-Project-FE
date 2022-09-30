import { useEffect } from "react";
import { getArticles } from "../utils/api";
import TopicList from "../components/TopicList";
import ArticlesList from "./ArticlesList";
import "../styling/Articles.css";

function ArticlePage({ articles, setArticles }) {
  useEffect(() => {
    getArticles().then(({ articles }) => {
      setArticles(articles);
    });
  }, [setArticles]);

  return (
    <div>
      <h2>Articles</h2>
      <TopicList />
      <ArticlesList articles={articles} />
    </div>
  );
}

export default ArticlePage;
