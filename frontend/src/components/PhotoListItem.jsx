
import React from 'react';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div >
      <img src={props.imageSource} alt="" />
    </div>
  )
}

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
}

export default PhotoListItem