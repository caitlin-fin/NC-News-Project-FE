import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-project-cf.herokuapp.com/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then((response) => {
    console.log("in get articles");
    return response.data;
  });
};
