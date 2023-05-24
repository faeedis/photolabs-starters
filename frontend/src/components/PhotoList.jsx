import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const {photos, likes, setLikes, displayPhoto, setDisplayPhoto,setBigPhoto} = props;
 
  const images = photos.map((image)=> {
    return (
      <PhotoListItem 
          key={image.id}
          id={image.id} 
          imageSource={image.urls.full} 
          user={image.user.name}
          city={image.location.city}
          country={image.location.country}
          profile={image.user.profile}
          likes={likes}
          setLikes={setLikes}
          displayPhoto={displayPhoto}
          setDisplayPhoto={setDisplayPhoto}
          setBigPhoto={setBigPhoto}
      />
    );
  });

  return (
    <ul className="photo-list">
      {images}
    </ul>
  );
}

export default PhotoList