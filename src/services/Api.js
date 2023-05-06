function fetchTweet(limit){
  
    const URL = `https://6454b20cf803f345762eaf23.mockapi.io/tweets/`
    return fetch(`${URL}?&page=1&limit=${limit}`)
    .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(`No tweets`));
        })
   
}
const api ={
    fetchTweet,
}

export default api;


