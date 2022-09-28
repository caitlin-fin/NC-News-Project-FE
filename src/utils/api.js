import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-project-cf.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return newsApi
    .get("/articles", { params: { topic: topic } })
    .then((response) => {
      return response.data;
    });
};

export const getArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

export const getTopics = () => {
  return newsApi.get("/topics").then((response) => {
    return response.data;
  });
};
