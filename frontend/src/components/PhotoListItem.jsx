
import React, {useState} from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const openPhoto = () => {
    props.setDisplayPhoto(true)
    props.setBigPhoto(props.id)
  }
  return (
    <div  className="photo-list--item">
      <PhotoFavButton key={props.id} likes={props.likes} setLikes={props.setLikes} displayPhoto={props.displayPhoto} />
      <img src={props.imageSource} className='photo-list--image' onClick={openPhoto}/>
      <div className='photo-list--user-info'>
        {
          props.hideUserName && <p>{props.username}</p>
        }
      </div>
    </div>
  )
}


export default PhotoListItem