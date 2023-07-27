import React, {useState} from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  return (
    <div  className="photo-list--item">
      <PhotoFavButton id={props.id} likes={props.likes} favoritePhoto={props.favoritePhoto} />
      <img src={props.urls.full} className='photo-list--image' onClick={() => props.openModal(props.id)} />
      <div className="photo-list--user-details">
        <img className="photo-list--user-profile" src={props.user.profile} />
        <div className="photo-list--user-info">
          {props.user.name}
          <div className="photo-list--user-location">
            {props.location.city}, {props.location.country}
          </div>
        </div>
      </div>
    </div>
  )
}


export default PhotoListItem