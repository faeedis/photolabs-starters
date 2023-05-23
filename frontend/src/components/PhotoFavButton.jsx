import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import { FavBadge } from './FavBadge';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [favorite, setFavorite] = useState(false);
  const handleClick = () => {
    if(props.displayPhoto) {
      if(favorite) {
        setFavorite(true);
      } else {
        setFavorite(false);
      }
    } 

    if (favorite) {
      props.setLikes(prev => prev - 1);
      setFavorite(favorite ? false : true);
    } else {
      props.setLikes(prev => prev + 1);
      setFavorite(true);
    }
  }

  return (
    <div className="photo-list--fav-icon" onClick={handleClick}>
      <div className="photo-list--fav-icon-svg">
        {favorite ? <FavBadge/> : <FavIcon/>} 
      </div>
    </div>
  );
}

export default PhotoFavButton;