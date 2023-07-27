import React from 'react';


import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) =>  {
  return (
    <div className="home-route" >
      <TopNavigation 
        topics={props.topics} 
        likes={ props.likes } 
        fetchTopicPhotos={props.fetchTopicPhotos}
      />
      <PhotoList 
        photos={props.photos}
        likes={ props.likes } 
        favoritePhoto={props.favoritePhoto}
        openModal={props.openModal} 
      />
    </div>
  );
}
export default HomeRoute;