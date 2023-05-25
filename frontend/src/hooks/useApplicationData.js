import { useState } from "react";


export default function useApplicationData() {
  const [displayPhoto, setDisplayPhoto] = useState(false);
  const [bigPhoto, setBigPhoto] = useState(null);
  const [likes, setLikes] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);


  return { 
        photos , 
        setPhotos ,
        topics , 
        setTopics ,
        displayPhoto ,
        setDisplayPhoto , 
        bigPhoto , 
        setBigPhoto , 
        likes, 
        setLikes
      };
}