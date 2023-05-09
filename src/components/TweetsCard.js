import React from "react";
import { Item, List, MainDiv, Img, Line,DivLine, Text, Button, ButtonChange, Logo, ImgCard, ListDiv } from "../Main.styled";
import logo from "../image/logo.svg";
import picture from "../image/picture.svg";
import { useState } from "react";
import axios from 'axios';



export const TweetsCard =({data:{ id, avatar, followers, tweets}})=>{

   const [follower, setFollower] = useState(followers);
   const [activeBtn, setActiveBtn] = useState(JSON.parse(localStorage.getItem(`activeBtn${id}`)));

   const changeFollowers = async()=>{

        const changeSubscription = activeBtn ? follower - 1 : follower + 1;
        // const changeIsFollowing = !isFollowing ? true : false;
        // localStorage.setItem('following', JSON.stringify(follower))
        // setFollower(follower);

          try {
          await axios.put(
            `https://6454b20cf803f345762eaf23.mockapi.io/tweets/${id}`,
            {
              followers: changeSubscription,
              // isFollowing: changeIsFollowing
            }
          );
        
          setFollower(changeSubscription);
          setActiveBtn(!activeBtn);
          localStorage.setItem(`activeBtn${id}`, JSON.stringify(!activeBtn))
        } catch (error) {
          console.log(error);
        }

    }
    
    return(
       <MainDiv>    
       
        <List>
          
          <Item key={id} >
            <Logo src={logo} alt="logo" width={76} height={22}></Logo>
              <ImgCard src={picture} alt="" width={308} height={168}></ImgCard>
              <DivLine>
                <Line> </Line>
                <Img src={avatar} alt="avatar" ></Img>
                <Line> </Line>
              </DivLine>
              <ListDiv>
                <Text>{tweets} TWEETS</Text>
                <Text>{follower.toLocaleString("en-US")} FOLLOWERS</Text>
                {!activeBtn ? 
                (<Button type="button" onClick={changeFollowers}>FOLLOW</Button>)
                :
                (<ButtonChange type="button" onClick={changeFollowers}>FOLLOWING</ButtonChange>)}
              </ListDiv>
          </Item>
          
        </List>
        </MainDiv> 
    )
}