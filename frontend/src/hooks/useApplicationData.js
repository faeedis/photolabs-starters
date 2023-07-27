import { useEffect,useReducer } from "react";
import axios from 'axios';

export const ACTION = {
  ALL_PHOTOS: "ALL_PHOTOS",
  ALL_TOPICS: "ALL_TOPICS",
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_SELECT_PHOTO: 'CLOSE_SELECT_PHOTO',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
}

export default function useApplicationData() {
  const defaultState = {
    photos: [],
    topics: [],
    likes: [],
    showPhoto: false, 
    detailPhotoId: null
  }

  function reducer(state, action) {
    switch (action.type) {
      case "ALL_PHOTOS":
        console.log('all the photos', action.payload);
        return {
          ...state,
          photos: action.payload.photos
        };
    
      case "ALL_TOPICS":
        console.log('all the topics', action.payload);
        return {
          ...state,
          topics: action.payload.topics
        };
      case "FAV_PHOTO_ADDED":
        return {
          ...state, 
          likes: [...state.likes, action.payload.id]
        };
      case "FAV_PHOTO_REMOVED":
        return {
          ...state, 
          likes: state.likes.filter(id => id !== action.payload.id)
        };
      case "SELECT_PHOTO":
        return {
          ...state,
          showPhoto: action.payload.isOpen,
          detailPhotoId: action.payload.detailPhotoId
        };
      case "CLOSE_SELECT_PHOTO":
        return {
          ...state,
          showPhoto: action.payload.isOpen,
          detailPhotoId: action.payload.detailPhotoId
        };
      case "GET_PHOTOS_BY_TOPICS":
        console.log('GET_PHOTOS_BY_TOPICS', action.payload);
        return {
          ...state,
          photos: action.payload
        };
      default:
        throw new Error(
          `Unsupported Action: ${action.type}`
        );
    }
  } 
  
  const [state, dispatch] = useReducer(reducer, defaultState);

  // add and remove favorites of photos
  const favoritePhoto = (photoId) => {
    if (state.likes.includes(photoId)) {
      dispatch({
        type: "FAV_PHOTO_REMOVED",
        payload: { id: photoId }
      })
    } else {
      dispatch({
        type: "FAV_PHOTO_ADDED",
        payload: { id: photoId}
      })
    }
  }

  // open the Detail Photo Page
  const openModal = (photoId) => {
    dispatch({
      type: "SELECT_PHOTO",
      payload: {isOpen: true, detailPhotoId: photoId }
    })
  }
  
  // close a Detail Photo Page 
  const closeModal = () => {
    dispatch({
      type: "CLOSE_SELECT_PHOTO",
      payload: {isOpen: false, detailPhotoId: null}
    })
  }

  // retrive the photos based on topic Id
  const fetchTopicPhotos = (topicId) => {
    axios.get(`/api/topics/photos/${topicId}`)
      .then(res => {
      dispatch({
        type: "GET_PHOTOS_BY_TOPICS",
        payload: res.data
      })
    })
    .catch(e => {
      console.log("DB Error while fetching photos based on topic:", e);
    });
  }

  useEffect(() => {
    axios.get('/api/photos')
      .then(res => {
        dispatch({ 
          type: "ALL_PHOTOS", 
          payload: {photos:res.data}
        });
      })
      .catch(e => {
        console.log("DB Error while fetching photos:", e);
      });

    axios.get('/api/topics')
      .then(res => {
        dispatch({ 
          type: "ALL_TOPICS", 
          payload: {topics:res.data}
        });
      })
      .catch(e => {
        console.log("DB Error while fetching topics:", e);
      });
  }, []);

  return { 
    photos: state.photos,
    topics: state.topics,
    likes: state.likes,
    openModal,
    closeModal,
    detailPhotoId: state.detailPhotoId,
    fetchTopicPhotos,
    favoritePhoto,
    showPhoto: state.showPhoto
  };
}