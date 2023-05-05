import axios from "axios";

axios.defaults.baseURL = 'https://6454b20cf803f345762eaf23.mockapi.io';
// axios.defaults.baseURL.url.searchParams.append('page', 1);
// axios.defaults.baseURL.url.searchParams.append('limit', 10);

export async function fetchTweet(){
    const {data} = await axios.get('/tweets/');
    return data;
}