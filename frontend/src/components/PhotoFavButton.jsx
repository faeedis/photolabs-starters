import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  return (
    <div className="photo-list--fav-icon" onClick={() => props.favoritePhoto(props.id)}>
      <div className="photo-list--fav-icon-svg">
        <FavIcon fill = {props.likes.includes(props.id) ? "#C80000" : '#EEEEEE'}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;