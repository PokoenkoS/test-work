import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';




export const NavList = styled.ul`
  display: flex; 
  justify-content: space-around;
  width:1180px;
  background-color: #EBD8FF;
  border-color: #5CD3A8;

`

export const StyledNavLink = styled(NavLink)`
  color: black;
  &.active {
    color: rgb(20, 150, 144);
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