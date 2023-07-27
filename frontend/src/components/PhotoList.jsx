import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  
  const images = props.photos.map((image)=> {
    return (
      <PhotoListItem 
          key={image.id}
          {...image}
          openModal={props.openModal}
          likes={props.likes}
          favoritePhoto={props.favoritePhoto}
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