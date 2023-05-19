import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from './components/PhotoFavButton';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

const photos = [<PhotoListItem key="1"/>,<PhotoListItem key="1"/>,<PhotoListItem key="1"/>]

return (
  <div className="App">
    {photos}
    <PhotoFavButton />
  </div>
)
}

export default App