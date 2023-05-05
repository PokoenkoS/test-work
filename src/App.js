// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from "react";
import Tweets from "./components/Tweets"
import { fetchTweet } from "./services/Api";

export const App =()=> {

  const [tweets, setTweets] = useState([]);
 
    
  

  useEffect(()=>{
    fetchTweet().then(responce => 
      setTweets([...responce])
);
      
  },[])

  return (
   <>
   
   <Tweets data={tweets}/>
   </>
  )
}

export default App;
