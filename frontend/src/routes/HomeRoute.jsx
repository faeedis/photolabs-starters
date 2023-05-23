import React, { useState } from 'react';


import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) =>  {
  const [likes, setLikes] = useState(0);
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} likes={ likes } />
      <PhotoList 
        photos={props.photos} 
        likes={ likes } 
        setLikes={ setLikes } 
        setDisplayPhoto={props.setDisplayPhoto}
        setBigPhoto={props.setBigPhoto}
      />
    </div>
  );
}
export default HomeRoute;