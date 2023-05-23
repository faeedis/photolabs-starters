import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import photoData from './mocks/photos';
import topicData from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const photosList = Object.values(photoData);
  const topicsList = Object.values(topicData);
  const [displayPhoto, setDisplayPhoto] = useState(false);
  const [bigPhoto, setBigPhoto] = useState(null);
  const [likes, setLikes] = useState(0);

  return (
    <div className="App">
      <HomeRoute 
        photos={photosList} 
        topics={topicsList} 
        setDisplayPhoto={setDisplayPhoto} 
        setBigPhoto={setBigPhoto}
        likes={likes}
        setLikes={setLikes}
      />
      {
        displayPhoto && <PhotoDetailsModal 
                          bigPhoto={bigPhoto} 
                          setDisplayPhoto={setDisplayPhoto} 
                          setBigPhoto={setBigPhoto} 
                          photosList={photosList}
                          likes={likes}
                          setLikes={setLikes}
                        /> 
      }
    </div>
  )
}

export default App