import React from "react"
// import { useEffect, useState } from "react";
// import { fetchTweet } from "../services/Api";
import { Item, List, MainDiv, Img } from "../Main.styled";
import logo from "../image/logo.svg";
import picture from "../image/picture.svg";
import rectangle from "../image/Rectangle 1.png";


export const Tweets = ({data})=>{
    // const [followers, setFollowers] = useState(null);
    // console.log(followers);

    // useEffect(()=>{
    //     fetchTweet().then(responce=> responce.map((item)=>{
    // setFollowers(item.followers)
    //     }));
    //  },[])
console.log(data);
   let user = data.map((item)=> item )
   
      const handleincrement =(e)=>{
        e.preventDefault();
        console.log(e);
         user +=1
         console.log(user);
      }

     return(
     <MainDiv>     
        <List>
            {data.map((item)=>{
                return(
                    <Item key={item.id} >
                        <img src={logo} alt="logo" width={76} height={22}></img>
                        <img src={picture} alt="" width={308} height={168}></img>
                        <img src={rectangle} alt="rectangle"></img>
                        <Img src={item.avatar} alt="avatar" ></Img>
                        <p>{item.tweets} TWEETS</p>
                        <p>{item.followers}FOLLOWERS</p>
                        <button type="button" onClick={handleincrement}>FOLLOW</button>
                        <button type="button">FOLLOWING</button>

                    </Item>
                )
            })}

        </List>
        </MainDiv>
     )
}

export default Tweets;