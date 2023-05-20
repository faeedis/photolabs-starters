import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const {photos} = props;
 
  const images = photos.map((image)=> {
    return (
      <PhotoListItem 
          key={image.id}
          id={image.id} 
          imageSource={image.urls.full} 
          hideUserName={false} 
          userName={image.user.userName}
      />
    );
  });

  return (
    <div className="photo-list">
      {images}
    </div>
  );
}

export default PhotoList