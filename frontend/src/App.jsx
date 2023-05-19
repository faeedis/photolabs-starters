import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

const photos = [<PhotoListItem key="1"/>]

  return (
    <div className="App">
      {photos}
    </div>
  )
}

export default App