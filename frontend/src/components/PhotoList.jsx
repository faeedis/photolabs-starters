import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const {photos, likes, setLikes, setDisplayPhoto,setBigPhoto} = props;
 
  const images = photos.map((image)=> {
    return (
      <PhotoListItem 
          key={image.id}
          id={image.id} 
          imageSource={image.urls.full} 
          hideUserName={false} 
          userName={image.user.userName}
          likes={likes}
          setLikes={setLikes}
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