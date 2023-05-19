import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import { FavBadge } from './FavBadge';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [state, setState] = useState(false);
  const fav = () => setState(state ? false : true);
  return (
    <div className="photo-list--fav-icon" onClick={fav}>
      <div className="photo-list--fav-icon-svg">
        {state ? <FavBadge/> : <FavIcon/>} 
      </div>
    </div>
  );
}

export default PhotoFavButton;