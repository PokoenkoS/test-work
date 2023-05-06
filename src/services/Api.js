
const url = new URL('https://6454b20cf803f345762eaf23.mockapi.io/tweets/')
url.searchParams.append('completed', false);
url.searchParams.append('page', 1);
url.searchParams.append('limit', 3);

export  function fetchTweet(){
 fetch(url, {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
   return res.json();
  }
 
})

.catch(error => {
 return console.log(error);
})
}
