import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

export const PhotoDetailsModal = (props) => {
  const image = props.photos.find(photo => photo.id === props.detailPhotoId);

  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button'  onClick={props.closeModal}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_428_287">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="photo-details-modal--images">
        <div>
          <div  className="photo-list--item">
            <PhotoFavButton id={props.detailPhotoId} likes={props.likes} favoritePhoto={props.favoritePhoto} />
            <img src={image.urls.full} className='photo-details-modal--image'/>
          </div>
          <div className="photo-list--user-details">
            <img className="photo-list--user-profile" src={image.user.profile} />
            <div className="photo-list--user-info">{image.user.name}
              <div className="photo-list--user-location">{image.location.city}, {image.location.country}</div>
            </div>
          </div>
        </div>
        <header className="photo-details-modal--header">Related Photos</header>
        <PhotoList 
          photos={props.photos}
          likes={ props.likes } 
          favoritePhoto={props.favoritePhoto}
          openModal={props.openModal} 
        />
      </div>
    </div>
  )
}

export default PhotoDetailsModal;