import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  return (
    <div className="topic-list--item">
      <a href={props.link}><span>{props.label}</span></a>
    </div>
  )
}


export default TopicListItem