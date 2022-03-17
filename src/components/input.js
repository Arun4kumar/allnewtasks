import React,{ useState,useRef,useEffect } from "react";
import styledComponents from "styled-components";
import { CheckBox } from "./checkbox";
import { useDispatch } from "react-redux";
const TextInput = styledComponents.input`
 
border:none;
padding-left:1rem;
background-color:transparent;
font-size:1.5rem;
outline:none;
color:${({ color }) => color}
`;
export const ListItemContainer = styledComponents.section`
display:flex;
align-items:center;
`;

const Input = React.forwardRef((props,ref) => {
  const text = useRef();
  const dateTime = useRef();
  const dispatch = useDispatch()
  const [ rem,setRem ] = useState(false);

  useEffect(() => {
    const func = (event) => {
      if (event.key === "Enter") {
        add()
      }
    };
    document.addEventListener("keypress",func);

    return () => {
      document.removeEventListener("keypress",func);
    };
  },[]);

  const add = () => {
    const date = new Date();
    if (text.current.value === "") {
      alert("kuch toh maryada rakhye")
      return
    }
    const task = { text: text.current.value,id: date.getMilliseconds() % 1000,dateTime: dateTime.current ? dateTime.current.value : new Date(),active: true }
    console.log(task)
    dispatch({ type: "add",task })
  }

  return (
    <ListItemContainer>
      <CheckBox onClick={() => setRem(!rem)} active={!rem} color={props.colorActive} colorHover={props.color} />
      <TextInput
        color={props.textColor}
        type="text"
        ref={text}
        placeholder="Create a new todo..."
      />
      <button name="add" id="add" onClick={add} >add</button>

      {rem && <input ref={dateTime} id="date" type="datetime-local" name="date time" />}


    </ListItemContainer>
  );
});

export default Input;
