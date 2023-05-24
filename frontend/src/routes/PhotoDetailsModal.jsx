import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

export const PhotoDetailsModal = (props) => {
  const handleClose = () => {
    props.setDisplayPhoto(false);
    props.setBigPhoto(null);
  }
  const photosLst = props.photosList;
  const image = photosLst.find(photo => photo.id === props.bigPhoto);

  const photos = photosLst.filter(item => {return item.urls.full === image.urls.full && item.id !== props.bigPhoto});

  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button'  onClick={handleClose}>
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
            <PhotoFavButton id={props.bigPhoto} likes={props.likes} setLikes={props.setLikes} displayPhoto={props.displayPhoto} />
            <img src={image.urls.full} className='photo-details-modal--image'/>
          </div>
          <div className="photo-list--user-details">
            <img className="photo-list--user-profile" src={image.user.profile} />
            <div className="photo-list--user-info">{image.user.name}
              <div className="photo-list--user-location">{image.location.city}, {image.location.country}</div>
            </div>
          </div>
        </div>
        <header className="photo-details-modal--header">Similar Photos</header>
        <PhotoList 
          photos={photos} 
          likes={ props.likes } 
          setLikes={ props.setLikes } 
          displayPhoto={props.displayPhoto}
          setDisplayPhoto={props.setDisplayPhoto}
          setBigPhoto={props.setBigPhoto}
        />
      </div>
    </div>
  )
}

export default PhotoDetailsModal;