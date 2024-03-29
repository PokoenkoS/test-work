import React from "react";
import {Item, Img, DivLine, Text, Button, ButtonChange,  ListDiv } from "./TweetsCard.styled"
import { useState } from "react";
import axios from 'axios';


export const TweetsCard =({data:{ id, avatar, followers, tweets}})=>{

   const [follower, setFollower] = useState(followers);
   const [activeBtn, setActiveBtn] = useState(JSON.parse(localStorage.getItem(`activeBtn${id}`)));
 
   const changeFollowers = async()=>{

        const changeSubscription = activeBtn ? follower - 1 : follower + 1;
      
          await axios.put(
            `https://6454b20cf803f345762eaf23.mockapi.io/tweets/${id}`,
            {followers: changeSubscription}
          );
        
          setFollower(changeSubscription);
         
          localStorage.setItem(`activeBtn${id}`,JSON.stringify(!activeBtn))
          setActiveBtn(!activeBtn);
         
        } 
      
    return(
               
          <Item key={id} >
                         
              <DivLine>
                <Img src={avatar} alt="avatar" ></Img>
              </DivLine>
              <ListDiv>
                <Text>{tweets} TWEETS</Text>
                <Text>{follower.toLocaleString("en-US")} FOLLOWERS</Text>
                {!activeBtn ? 
                (
                <Button type="button" onClick={changeFollowers}>FOLLOW</Button>
                 )
                :
                (<ButtonChange type="button" onClick={changeFollowers}>FOLLOWING</ButtonChange>)
                } 
              </ListDiv>
          </Item>
          
        )
}