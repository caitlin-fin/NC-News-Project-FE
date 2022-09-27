import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// import "./App.css";
import Home from "./pages/Home";
import SingleArticle from "./pages/SingleArticle";
import ArticleProvider from "./providers/ArticleProvider"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleProvider />}>
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
