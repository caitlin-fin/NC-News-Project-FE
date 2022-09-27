import { useEffect, useState } from "react";
import Articles from "../pages/Articles";
import SingleArticle from "../pages/SingleArticle";
import axios from "axios";

function ArticleProvider() {
const [articles, setArticles] = useState([]);
useEffect(() => {
    axios.get(`https://nc-news-project-cf.herokuapp.com/api/articles`)
    .then((response) => {
        setArticles(response.data.articles)
    })
}, [])

return (
    <div>
        <Articles articles={articles}/>
        <SingleArticle />
    </div>
)
}
export default ArticleProvider;