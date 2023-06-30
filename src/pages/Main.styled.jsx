import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MainDiv = styled.div`
  align-items: center;
  background-color: #510f98;
   margin:0;
   height: 1200px;
   padding-left: 70px;
`


export const NavList = styled.ul`
padding-top: 15px;
  display: flex; 
  justify-content: space-around;
  width:100%;
  height:80px;
  background-color: #EBD8FF;
  border-color: #5CD3A8;
 
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
  padding-left:420px;
  display: block;
`



export const ImgBoy = styled.img`
  display: inline-block;
  padding-left: 600px;
`