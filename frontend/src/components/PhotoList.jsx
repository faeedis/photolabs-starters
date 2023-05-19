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
          imageSource={image.imageSource} 
          hideUserName={image.hideUserName} 
      />
    );
  });

  return (
    <div className="photo-list">
      {images}
    </div>
  );
}

PhotoList.defaultProps = {
  photos: [
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 1,
     hideUserName: false,
    },
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 2,
     hideUserName: false,
    },
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 3,
     hideUserName: false,
    }
   ]
}

export default PhotoList