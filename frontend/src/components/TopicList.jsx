import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = (props) => {
   const topics = props.topics.map((topic)=> {
    return (
      <TopicListItem 
          key={topic.id}
          {...topic}
          fetchTopicPhotos={props.fetchTopicPhotos}
      />
    );
  });

  return (
    <ul className="top-nav-bar--topic-list">
      {topics}
    </ul>
  );
}

export default TopicList