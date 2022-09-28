import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";

function TopicList() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, [topics]);

  return (
    <div>
      {topics.map((topic) => {
        return (
          <Link to={`/articles/${topic.slug}`} key={topic.slug}>
            <button className="topic-button">{topic.slug}</button>
          </Link>
        );
      })}
    </div>
  );
}
export default TopicList;
