import React from 'react';


import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) =>  {
  return (
    <div className="home-route" >
      <TopNavigation topics={props.topics} likes={ props.likes } />
      <PhotoList 
        photos={props.photos}
        likes={ props.likes } 
        setLikes={ props.setLikes } 
        displayPhoto={props.displayPhoto}
        setDisplayPhoto={props.setDisplayPhoto}
        setBigPhoto={props.setBigPhoto}
      />
    </div>
  );
}
export default HomeRoute;