import styled from '@emotion/styled';
import logo from "../../image/logo.svg";
import picture from "../../image/picture.svg"

export const Item = styled.li`
  background: 
  url(${logo}) 20px 20px,
  url(${picture}) center 28px;
  background-repeat: no-repeat;
  width: 380px;
  height:460px;
  background-color: #4B2A99 ;
  margin-right: 48px;
  margin-bottom: 48px; 
  padding-bottom:36px;
  border-radius: 20px;
  align-items: center;
  `
  export const Img = styled.img`
  border-radius: 50%;
  border-style: solid;
  border-color:#EBD8FF;
  border-width: 8px;
  width: 80px;
  height: 80px;
  position: relative;
  
  `
  export const DivLine= styled.div`
  padding-top: 178px ;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  &::after, ::before {
    
    display: block;
    content: "";
    background-color: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #AE7BE3,
    inset 0px 3.43693px 2.5777px #FBF8FF;
    height: 8px;
    width: 142px;
    border-radius: 2px;

      
  }
 
  
`
export const Text = styled.p`
  font-style: Medium;
  color: #EBD8FF;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin: 15px;
`
export const Button = styled.button`
  background-color: #EBD8FF;
  color: #373737;
  width: 196px;
  height: 50px;
  border-radius:10.3px;
  font-style: SemiBold;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  text-transform: uppercase;
  &:hover {
    border-color: #5CD3A8;
    color: #5CD3A8;
  }

`
export const ButtonChange = styled.button`
  background-color: #5CD3A8;
  color: #373737;
  width: 196px;
  height: 50px;
  font-weight: 600;
  border-radius:10.3px;
  font-family: Montserrat;
  font-style: SemiBold;
  font-size: 18px;
    &:hover {
    border-color: #EBD8FF;
    color: #4B2A99;
  }
`


export const ListDiv = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
`
