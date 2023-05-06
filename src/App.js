import { useEffect, useState } from "react";
import Tweets from "./components/Tweets"
import fetchApi from "./services/Api";


export const App =()=> {

  const [tweets, setTweets] = useState([]);
  const [limit, setLimit] = useState(3);
  
  useEffect(()=>{
    fetchApi.fetchTweet(limit).then(responce=>{ 
      setTweets([...responce])
    })
   
  },[limit])

 const handleLoadMore =()=> {
  setLimit((limit)=>{
    return limit +=3
  })
  if(tweets.length===12){
    return alert('It`s all')
  }
 }


  return (
   <>
   
   <Tweets data={tweets}/>
   <button type="button" onClick={handleLoadMore}>Load More</button>
   </>
  )
}

export default App;
