import React,{ useState } from "react";
import styledComponents from "styled-components";
import { CheckBox } from "./checkbox";
import Moment from 'react-moment';

const Container = styledComponents.div`
  display:flex;
  align-items:center;
  padding:1rem;
  h1{
      margin-left:1rem;
      color:${({ active,colorActive,color }) => (active ? colorActive : color)};
        text-decoration-line: ${({ active }) =>
    active ? `line-through` : `none`}
  }
  &>img{
      height:.9rem;
      cursor:pointer;
      margin-left:auto;    
  }
  border-bottom:1px solid ${({ colorActive }) => (colorActive)};
  @media screen and (min-width:500px) {
   &>img{
     display:none;
   }
   &:hover{
     &>img{
       display:block;
     }
   }
  }

`;

const dateTimeComp = styledComponents.time`

`

const ListItem = ({ item,check,remove,color,colorActive }) => {
  const [ date,setDate ] = useState(new Date(item.dateTime));
  const [ temp,setTemp ] = useState(1);

  setInterval(() => {
    setTemp(temp + 1)
  },[ 30000 ])

  return (
    <Container color={color} colorActive={colorActive} active={item.active}>
      <CheckBox
        color={colorActive}
        colorHover={color}
        onClick={() => check(item.id)}
        active={item.active}
      >
        {!item.active && <img src="./images/icon-check.svg" />}
      </CheckBox>
      <h1>{item.text}</h1>

      <Moment style={{ marginLeft: "auto" }} format="hh:mm:ss" durationFromNow>
        {date}
      </Moment>
      <img onClick={() => remove(item.id)} src="./images/icon-cross.svg" />
    </Container>
  );
};

export default ListItem;
