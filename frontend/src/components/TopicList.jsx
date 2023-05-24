import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = (props) => {
   const topics = props.topicList.map((topic)=> {
    return (
      <TopicListItem 
          key={topic.id}
          id={topic.id} 
          label={topic.title} 
          link={topic.slug} 
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