import React from 'react';

import HomeRoute from './routes/HomeRoute';
import photoData from './mocks/photos';
import topicData from './mocks/topics';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const photosList = Object.values(photoData);
  const topicsList = Object.values(topicData);
  return (
    <div className="App">
      <HomeRoute photos={photosList} topics={topicsList} />
    </div>
  )
}

export default App