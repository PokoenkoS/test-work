import React from "react";
import { Item, List, MainDiv, Img, Line,DivLine, Text, Button, ButtonChange } from "../Main.styled";
import logo from "../image/logo.svg";
import picture from "../image/picture.svg";
import { useState } from "react";
import axios from 'axios';


export const TweetsCard =({data:{ user, id, avatar, followers, tweets, isFollowing }})=>{
   const [follower, setFollower] = useState(followers);
   const [activeBtn, setActiveBtn] = useState(isFollowing);
 
    const changeFollowers = async()=>{
        const changeFollower = isFollowing ? follower - 1 : follower + 1;
        const changeIsFollowing = !isFollowing ? true : false;
        
        console.log(changeIsFollowing);
        try {
          await axios.put(
            `https://6454b20cf803f345762eaf23.mockapi.io/tweets/${id}`,
            { followers: changeFollower,
             isFollowing: changeIsFollowing 
            }
          );
          setFollower(changeFollower);
          setActiveBtn(!activeBtn);
        } catch (error) {
          console.log(error);
        }

    }
    
    return(
       <MainDiv>     
        <List>
            
                    <Item key={id} >
                        <div>
                        <img src={logo} alt="logo" width={76} height={22}></img>
                        <img src={picture} alt="" width={308} height={168}></img>
                        </div>
                        
                        <DivLine>
                        <Line> </Line>
                        <Img src={avatar} alt="avatar" ></Img>
                        <Line> </Line>
                        </DivLine>
                        
                        <Text>{tweets} TWEETS</Text>
                        <Text>{follower} FOLLOWERS</Text>
                        {activeBtn ? 
                        (<Button type="button" onClick={changeFollowers}>FOLLOW</Button>)
                        :
                        (<ButtonChange type="button" onClick={changeFollowers}>FOLLOWING</ButtonChange>)}
                       

                    </Item>
                           

        </List>
        </MainDiv> 
    )
}