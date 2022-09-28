import { useEffect, useState } from "react";
import Articles from "../pages/Articles";
import { getArticles } from "../utils/api";
import TopicList from "../components/TopicList";
import { useParams } from "react-router-dom";

function ArticleProvider() {
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState(null);

  useEffect(() => {
    getArticles(topic).then(({ articles }) => {
      setArticles(articles);
    });
  }, [topic]);

  return (
    <div>
      <h1>Articles</h1>
      <TopicList setTopic={setTopic} topic={topic} />
      <Articles articles={articles} />
    </div>
  );
}
export default ArticleProvider;
