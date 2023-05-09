
import fetchApi from "../services/Api";
import { useEffect, useState} from "react";
import TweetsList from "../components/TweetsList"
import { Button } from "../Main.styled";
import { useNavigate, useLocation } from "react-router-dom";

 const Tweets =()=>{

  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const from =location.state?.from || '/';
  const goBackPage = ()=> navigate(from)
  
    useEffect(()=>{
      const getTweets = async ()=>{
      
      try{
          const responce = await fetchApi.fetchTweet(page);
          setTweets(prev=>([...prev,...responce]))
        }
        catch(error){
          return console.log(error);
        }
      }
        getTweets(page);
    },[page]);

    
    const handleLoadMore =()=> {
    setPage((prev)=>prev +1
    )
   }
       
      return (
       <>
       <Button type="button"onClick={goBackPage}>Go back</Button>
       <TweetsList
        data={tweets}
      />
      {tweets.length<12 &&<Button type="button" onClick={handleLoadMore}>Load More</Button>}
      
       </>
      )
    }
    
export default Tweets;