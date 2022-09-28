import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";

function TopicList({ setTopic, topic }) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, [topics]);

  function handleClick(event) {
    event.preventDefault();
    setTopic(event.target.value);
  }
  return (
    <div>
      {topics.map((topic) => {
        return (
          <button
            onClick={handleClick}
            className="topic-button"
            key={topic.slug}
            value={topic.slug}
          >
            {topic.slug}
          </button>
        );
      })}
      <button
        onClick={() => {
          setTopic(null);
        }}
      >
        all articles
      </button>
    </div>
  );
}
export default TopicList;
