
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  return (
    <div  className="photo-list--item">
      <PhotoFavButton/>
      <img src={props.imageSource} className='photo-list--image' />
      <div className='photo-list--user-info'>
        {
          props.hideUserName && <p>{props.username}</p>
        }
      </div>
    </div>
  )
}


export default PhotoListItem