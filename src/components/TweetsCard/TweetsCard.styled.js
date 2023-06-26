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