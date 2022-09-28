import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ArticlesByTopic from "./pages/ArticlesByTopic";
// import "./App.css";
import Home from "./pages/Home";
import ArticleProvider from "./providers/ArticleProvider";

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
            <ArticleProvider articles={articles} setArticles={setArticles} />
          }
        />
        <Route
          path="/articles/:topic_slug"
          element={
            <ArticlesByTopic articles={articles} setArticles={setArticles} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
