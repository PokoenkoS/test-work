import React from "react"
import { useEffect, useState } from "react";
import { Item, List, MainDiv, Img, Line,DivLine, Text, Button } from "../Main.styled";
import logo from "../image/logo.svg";
import picture from "../image/picture.svg";



export const Tweets = ({data})=>{
    const [followers, setFollowers] = useState(data.followers);
    console.log(followers);

    useEffect(()=>{
      data.map((item)=> {
        setFollowers(item.followers)
      })
       
 
     },[])

   
      const handleincrement =()=>{
        // e.preventDefault();
        // console.log(e);
       setFollowers(followers+1)
      }

     return(
     <MainDiv>     
        <List>
            {data.map((item)=>{
                return(
                    <Item key={item.id} >
                        <div>
                        <img src={logo} alt="logo" width={76} height={22}></img>
                        <img src={picture} alt="" width={308} height={168}></img>
                        </div>
                        
                        <DivLine>
                        <Line> </Line>
                        <Img src={item.avatar} alt="avatar" ></Img>
                        <Line> </Line>
                        </DivLine>
                        
                        <Text>{item.tweets} TWEETS</Text>
                        <Text>{followers} FOLLOWERS</Text>
                        <Button type="button" onClick={handleincrement}>FOLLOW</Button>
                        {/* <button type="button">FOLLOWING</button> */}

                    </Item>
                )
            })}

        </List>
        </MainDiv>
     )
}

export default Tweets;