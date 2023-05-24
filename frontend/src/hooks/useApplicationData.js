import { useState } from "react";
import photoData from '../mocks/photos';
import topicData from '../mocks/topics';

export default function useApplicationData() {
  const photosList = Object.values(photoData);
  const topicsList = Object.values(topicData);
  const [displayPhoto, setDisplayPhoto] = useState(false);
  const [bigPhoto, setBigPhoto] = useState(null);
  const [likes, setLikes] = useState(0);


  return { photosList , topicsList , displayPhoto , setDisplayPhoto , bigPhoto , setBigPhoto , likes, setLikes};
}