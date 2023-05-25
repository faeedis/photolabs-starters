import React, { useEffect } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData'; 
import './App.scss';
import axios from 'axios';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    photos,
    setPhotos,
    topics,
    setTopics,
    displayPhoto,
    setDisplayPhoto,
    bigPhoto,
    setBigPhoto,
    likes,
    setLikes,
  } = useApplicationData(); 

  useEffect(() => {
    axios.get('http://localhost:8001/api/photos')
    .then(res => {
      setPhotos(res.data)
    })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:8001/api/topics')
    .then(res => {
      setTopics(res.data)
    })
  }, [])

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
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
                          photosList={photos}
                          likes={likes}
                          setLikes={setLikes}
                        /> 
      }
    </div>
  )
  
}

export default App