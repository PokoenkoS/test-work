import axios from 'axios';

axios.defaults.baseURL = 'https://6454b20cf803f345762eaf23.mockapi.io';

export const fetchTweet = async (page) => {
  const { data } = await axios.get(`/tweets?page=${page}&limit=3`);
  return data;
};

const api ={
    fetchTweet,
}

export default api;


