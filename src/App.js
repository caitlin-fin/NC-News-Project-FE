import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ArticlesByTopic from "./pages/ArticlesByTopic";
// import "./App.css";
import Home from "./pages/Home";
import ArticlesPage from "./pages/ArticlesPage";
import SingleArticle from "./pages/SingleArticle";

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/articles"
          element={
            <ArticlesPage articles={articles} setArticles={setArticles} />
          }
        />
        <Route
          path="/articles/topics/:topic_slug"
          element={
            <ArticlesByTopic articles={articles} setArticles={setArticles} />
          }
        />
        <Route
          path="/articles/:article_id"
          element={<SingleArticle articles={articles} />}
        />
      </Routes>
    </div>
  );
}

export default App;
