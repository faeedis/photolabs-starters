
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <li  className="photo-list--item">
      <PhotoFavButton/>
      <img src={props.imageSource} className='photo-list--image' />
      <div className='photo-list--user-info'>
        {
          props.hideUserName && <p>{props.username}</p>
        }
      </div>
    </li>
  )
}


export default PhotoListItem