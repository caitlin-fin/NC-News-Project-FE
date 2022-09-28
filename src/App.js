import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// import "./App.css";
import Home from "./pages/Home";
import ArticleProvider from "./providers/ArticleProvider"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleProvider />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
