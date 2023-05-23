import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import FavIcon from './FavIcon';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList topicList={props.topics} />
      <div className="photo-list--fav-icon-svg">
        {props.likes >= 1 ? <FavBadge/> : <FavIcon/>} 
      </div>
    </div>
  )
}

export default TopNavigation;