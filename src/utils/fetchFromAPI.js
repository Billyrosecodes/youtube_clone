//utility function for fetching Api data
import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/captions';

const options = {
    params: {
     maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  //destructure the response and return destructured data
 export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data; //return data as a function
 }