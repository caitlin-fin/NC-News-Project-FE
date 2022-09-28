import { useEffect, useState } from "react";
import Articles from "../pages/Articles";
import { getArticles } from "../utils/api";
import axios from 'axios';

function ArticleProvider() {
const [articles, setArticles] = useState([]);
useEffect(() => {
    getArticles()
    .then(({articles}) => {
        setArticles(articles)
    })
}, [])

return (
    <div>
        <Articles articles={articles}/>
    </div>
)
}
export default ArticleProvider;