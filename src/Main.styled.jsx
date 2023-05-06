import styled from '@emotion/styled';

export const MainDiv = styled.div`
/* margin-right: auto;
margin-left: auto; */
display: flex;
/* flex-direction: column; */
/* justify-content: center; */
align-items: center;
/* font-size: 40; */
/* border-width: medium; */
/* color: #010101; */
`

export const Item = styled.li`
    width: 380px;
    height:460px;
    background-color: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    background-color: #4B2A99 ;
    margin-right: 48px;
    margin-bottom: 48px;
    padding-bottom:36px;
    display: flex;
    flex-direction: column;
    border-radius: 20.62px;
    align-items: center;

`
export const List = styled.ul`
   display: flex; 
   list-style:none;
   flex-wrap: wrap;
   justify-content: space-between;

`
export const Img = styled.img`
   border-radius: 50%;
   border-style: solid;
   border-color:#EBD8FF;
   border-width: 8px;
   width: 100px;
   
`
export const Line = styled.p`
  background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
        inset 0px -1.71846px 3.43693px #AE7BE3,
        inset 0px 3.43693px 2.5777px #FBF8FF;
    height: 8px;
  width: 132px;
  

`
export const DivLine= styled.div`
  display:flex;
  /* width: 300px;
  height: 300px; */
  flex-direction: row;
  align-items: center;
  
`
export const Text = styled.p`
 font-family: Montserrat;
font-style: Medium;
/* font-size: 20px; */
line-height: 24px;
color: #EBD8FF;

`
export const Button = styled.button`
background-color: #EBD8FF;
color: #373737;
width: 196px;
height: 50px;
border-radius:10.3px;
font-family: Montserrat;
font-style: SemiBold;
font-size: 18px;
margin-bottom: 36px;

`
export const ButtonChange = styled.button`
background-color: #5CD3A8;
color: #373737;
width: 196px;
height: 50px;
border-radius:10.3px;
font-family: Montserrat;
font-style: SemiBold;
font-size: 18px;
margin-bottom: 36px;

`
