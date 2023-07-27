import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import FavIcon from './FavIcon';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList 
        topics={props.topics} 
        fetchTopicPhotos={props.fetchTopicPhotos}
      />
      <div className="photo-list--fav-icon-svg">
        <FavBadge isFavPhotoExist= {props.likes.length > 0 ? 1 : 0} /> 
      </div>
    </div>
  )
}

export default TopNavigation;