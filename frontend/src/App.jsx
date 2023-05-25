import React from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData'; 
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    photos,
    topics,
    likes,
    openModal,
    closeModal,
    detailPhotoId,
    fetchTopicPhotos,
    favoritePhoto,
    showPhoto
  } = useApplicationData(); 

  return (
    <div className="App">
      <HomeRoute         
        photos={photos}
        topics={topics} 
        likes={likes} 
        fetchTopicPhotos={fetchTopicPhotos}
        favoritePhoto={favoritePhoto}
        openModal={openModal} 
      />
      {
        showPhoto && detailPhotoId && <PhotoDetailsModal 
                                        photos={photos}
                                        likes={likes}
                                        openModal={openModal} 
                                        closeModal={closeModal}
                                        favoritePhoto={favoritePhoto}
                                        detailPhotoId={detailPhotoId}                         
                                      /> 
      }
    </div>
  )
  
}

export default App