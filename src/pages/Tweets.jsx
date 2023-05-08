
import fetchApi from "../services/Api";
import { useEffect, useState } from "react";
import TweetsList from "../components/TweetsList"
import { Button } from "../Main.styled";
import { useNavigate, useLocation } from "react-router-dom";
 const Tweets =()=>{

      const [tweets, setTweets] = useState([]);
      const [page, setPage] = useState(1);
    //   const [isLoading, setIsLoading] = useState(false);
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from || '/';

      useEffect(()=>{
       
        const getTweets = async ()=>{
        //   setIsLoading(true)
        try{
          
            const responce = await fetchApi.fetchTweet(page);
            setTweets(prev=>([...prev,...responce]))
          }
          catch(error){
            return console.log(error);
          }
        //   finally{
        //     setIsLoading(false)
        //   }
        }
        
         getTweets(page);
        
       
      },[page])
    
     const handleLoadMore =()=> {
      setPage((prev)=>prev +1
      )
      
      if(tweets.length===12){
        return alert('It`s all')
      }
     }
     const goBackPage = () => navigate(from);
    
      return (
       <>
       <Button type="button"onClick={goBackPage}>Go back</Button>
       <TweetsList data={tweets}/>
       <Button type="button" onClick={handleLoadMore}>Load More</Button>
       </>
      )
    }
    

  
export default Tweets;