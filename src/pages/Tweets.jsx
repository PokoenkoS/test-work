
import fetchApi from "../services/Api";
import { useEffect, useState} from "react";
import TweetsList from "../components/TweetsList/TweetsList"
import { Button } from "../components/TweetsCard/TweetsCard.styled";
import { useNavigate, useLocation } from "react-router-dom";
import { DropDown } from "../components/DropDown";

 const Tweets =()=>{

  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [filterChange, setFilterChange] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const from =location.state?.from || '/';
  const goBackPage = ()=> navigate(from)
   
useEffect(()=>{
  
  const getTweets =async ()=> {
    try {
      const responce = await fetchApi.fetchTweet(page);
      setTweets(prev=>[...prev,...responce])
       setFilterChange(prev=>[...prev,...responce])
    } catch (error) {
      return console.log(error);
    }
  }
  getTweets()
}, [page])

const value = (e) => {
  const noLocal = tweets.filter(tweet =>!JSON.parse(localStorage.getItem(`activeBtn${tweet.id}`)))
  const local = tweets.filter(tweet =>JSON.parse(localStorage.getItem(`activeBtn${tweet.id}`))
  )
  
  const name = e.target.value;
   switch (name) {
    case 'all':
      setFilterChange(tweets);
      break;
    case 'follow':
      setFilterChange(
        noLocal
         
      );
    
      break;
    case 'following':
      setFilterChange(
        local
      );
      break;
    default:
      return;
  }
};

    const handleLoadMore =()=> {
    setPage((prev)=>prev +1
    )
   }
       
      return (
       <>
       <Button type="button"onClick={goBackPage}>Go back</Button>
       <DropDown filter={value}/>
              <TweetsList
        data={filterChange}
      />
      {tweets.length<12 &&<Button type="button" onClick={handleLoadMore}>Load More</Button>}
      
       </>
      )
    }
    
export default Tweets;