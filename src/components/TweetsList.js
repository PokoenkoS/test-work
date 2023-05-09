import React from "react"
import {  List, MainDiv } from "../Main.styled";
import { TweetsCard } from "./TweetsCard";



export const TweetsList = ({data})=>{
     
     return(
     <MainDiv>     
        <List>
            {data.map((item)=>(
                <TweetsCard data={item}/>
            ))
            }
        </List>
    </MainDiv>    
   
     )
}


export default TweetsList;