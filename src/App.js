// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from "react";
import Tweets from "./components/Tweets"
import { fetchTweet } from "./services/Api";

let limit = 3;
const url = new URL('https://6454b20cf803f345762eaf23.mockapi.io/tweets/?${page}&${limit}')
url.searchParams.append('completed', false);
url.searchParams.append('page', 1);
url.searchParams.append('limit', 3);


export const App =()=> {

  const [tweets, setTweets] = useState([]);
  console.log(tweets);

 const handleLoadMore =(e)=> {
  e.preventDefault();
  url.searchParams.splice('limit', 6);
  fetch(url, {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
     
        return res.json();
    }
   
  })
  .then(res => { 
    setTweets([...tweets,...res])
  })
  .catch(error => {
   return console.log(error);
  })
 }

  useEffect(()=>{

fetch(url, {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
   
      return res.json();
  }
 
})
.then(tweets => { 
  setTweets([...tweets])
})
.catch(error => {
 return console.log(error);
})
  },[])

  // useEffect(()=>{
  //   setTweets()
  // }, [tweets])

  return (
   <>
   
   <Tweets data={tweets}/>
   <button type="button" onClick={handleLoadMore}>Load More</button>
   </>
  )
}

export default App;
