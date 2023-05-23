import React from 'react';

import '../styles/PhotoDetailsModal.scss'

export const PhotoDetailsModal = (props) => {
  const handleClose = () => {
    props.setDisplayPhoto(false);
    props.setBigPhoto(null);
  }

  const image = props.photosList.find(photo => photo.id === props.bigPhoto);
  console.log("Image="+image.urls.full);
  return (
    <div className='photo-details-modal' onClick={handleClose}>
      <button className='photo-details-modal--close-button'>
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
        <img className="photo-details-modal--image" src={image.urls.full}></img>
        <header className="photo-details-modal--header">Similar Photos</header>
      </div>
    </div>
  )
}

export default PhotoDetailsModal;