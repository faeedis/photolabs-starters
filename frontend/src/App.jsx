import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData'; 
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    photosList,
    topicsList,
    displayPhoto,
    setDisplayPhoto,
    bigPhoto,
    setBigPhoto,
    likes,
    setLikes,
  } = useApplicationData(); 

  return (
    <div className="App">
      <HomeRoute 
        photos={photosList} 
        topics={topicsList} 
        displayPhoto={displayPhoto}
        setDisplayPhoto={setDisplayPhoto} 
        setBigPhoto={setBigPhoto}
        likes={likes}
        setLikes={setLikes}
      />
      {
        displayPhoto && <PhotoDetailsModal 
                          bigPhoto={bigPhoto} 
                          displayPhoto={displayPhoto}
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