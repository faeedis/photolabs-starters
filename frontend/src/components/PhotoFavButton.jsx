import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import { FavBadge } from './FavBadge';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [favorite, setFavorite] = useState(false);
  const handleClick = () => {
    setFavorite(favorite ? false : true);

    if (favorite) {
      props.setLikes(prev => prev - 1);
    } else {
      props.setLikes(prev => prev + 1);
    }
  };

  return (
    <div className="photo-list--fav-icon" onClick={handleClick}>
      <div className="photo-list--fav-icon-svg">
        {favorite ? <FavBadge/> : <FavIcon/>} 
      </div>
    </div>
  );
}

export default PhotoFavButton;