import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";
import "../styling/Articles.css";

function TopicList() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, [topics]);

  return (
    <div className='topic-nav-bar'>
      {topics.map((topic) => {
        return (
          <Link
            to={`/articles/topics/${topic.slug}`}
            key={topic.slug}
            className="topic-link"
          >
            {topic.slug}
          </Link>
        );
      })}
    </div>
  );
}
export default TopicList;
