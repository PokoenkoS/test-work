import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MainDiv = styled.div`
  align-items: center;
  background-color: #510f98;
   margin:0;
   height: 1200px;
   
`
export const Div = styled.div`
  
  
`


export const NavList = styled.ul`
padding-top: 15px;
  display: flex; 
  justify-content: space-around;
  width:100%;
  height:80px;
  background-color: #EBD8FF;
  border-bottom: 3px solid #510f98;
  box-shadow: 0px 10px 60px 0px rgba(20, 12, 83, 0.823);
 
`

export const StyledNavLink = styled(NavLink)`
font-size: 30px;
font-weight:800;
text-decoration: none;
  color: #510f98;
  &.active {
    color: rgb(20, 150, 144);
    border-bottom: 3px solid
  }
`

export const Title = styled.h1`
  color: #5CD3A8;
  width: 500px;
  height: 50px;
  font-family: Montserrat;
  font-style: SemiBold;
  font-size: 40px;
  padding-left:620px;
  padding-top:30px;
  display: block;
`



export const ImgBoy = styled.img`
  display: inline-block;
  padding-left: 800px;
  margin-top:50px;
`
export const Button = styled.button`
  border:none;
  background-color: #5CD3A8;
  color: #373737;
  width: 100px;
  height: 30px;
  border-radius:10px;
  font-style: SemiBold;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
 margin-top: 15px;
   &:hover {
    border-color: #510f98;
    color:  #5CD3A8;
    background-color: #510f98;
  }

`