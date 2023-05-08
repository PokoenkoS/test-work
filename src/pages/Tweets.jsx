
import fetchApi from "../services/Api";
import { useEffect, useState } from "react";
import TweetsList from "../components/TweetsList"
import { Button } from "../Main.styled";
import { useNavigate, useLocation } from "react-router-dom";

 const Tweets =()=>{

      const [tweets, setTweets] = useState([]);
      const [page, setPage] = useState(1);
      // const [followers, setFollowers] =useState(()=> {
      //   const value = JSON.parse(localStorage.getItem("followers"));
      //   return value ?? [];
      // })
     
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from || '/';

      useEffect(()=>{
        const getTweets = async ()=>{
       
        try{
            const responce = await fetchApi.fetchTweet(page);
            setTweets(prev=>([...prev,...responce]))
            // setFollowers(followers => followers = [...responce])
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
      
      if(tweets.length===12){
        return alert('It`s all')
      }
     }
     const goBackPage = () => navigate(from);
    
      return (
       <>
       <Button type="button"onClick={goBackPage}>Go back</Button>
       <TweetsList
        data={tweets}
        //  userFollowers={followers}
        // statusFunction={({user, status})=>setFollowers({user, status})}
        // isFollowed={followers.includes(id)}
        />
       <Button type="button" onClick={handleLoadMore}>Load More</Button>
       </>
      )
    }
    

  
export default Tweets;