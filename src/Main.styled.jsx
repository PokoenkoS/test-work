import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MainDiv = styled.div`
  align-items: center;
  background-color: #EBD8FF;
  /* height: 600px; */
  margin:0;
`
export const Item = styled.li`
  width: 380px;
  height:460px;
  background-color: #4B2A99 ;
  margin-right: 48px;
  margin-bottom: 48px; 
  padding-bottom:36px;
  border-radius: 20px;
  align-items: center;
  
`
export const List = styled.ul`
  margin: 0;
  display: flex; 
  list-style:none;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const NavList = styled.ul`
  display: flex; 
  list-style:none;
  justify-content: space-around;
  width:1180px;
  background-color: #EBD8FF;
  border-color: #5CD3A8;

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
export const ImgCard = styled.img`
  padding: 28px 36px 0px 36px;
`
export const Line = styled.p`
background: #EBD8FF;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #AE7BE3,
    inset 0px 3.43693px 2.5777px #FBF8FF;
height: 8px;
width: 142px;
`
export const DivLine= styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  
`
export const Text = styled.p`
  font-family: Montserrat;
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
  font-family: Montserrat;
  font-style: SemiBold;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  cursor: pointer;
  border: transparent;
  text-transform: uppercase;

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

export const Logo = styled.img`
  padding-top: 20px;
  padding-left: 20px;
  position: absolute;
`

export const ListDiv = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
`
export const ImgBoy = styled.img`
  display: inline-block;
  padding-left: 600px;
`