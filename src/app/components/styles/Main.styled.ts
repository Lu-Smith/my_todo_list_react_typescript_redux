import styled from 'styled-components';


export const MainContainer = styled.div`
 background-color: ${props => 
 props.theme === "original" ? "#fffafa" : 
 props.theme === "light" ? "#f9f6f7" : 
 props.theme === "dark" ? "black" : "orange"};
 color: ${props => 
 props.theme === "original" ? "black" : 
 props.theme === "light" ? "#ff971d" : 
 props.theme === "dark" ? "#00d1ff" : "#5e227f"};
 padding: 10px 0;
 font-size: 20px;
 line-height: 30px;
 height: 87%;
`

export const NewTask = styled.div`
  margin-top: 20px;
  background: ${props => 
   props.theme === "original" ? "#ffc0d0" : 
   props.theme === "light" ? "#ffe8d6" : 
   props.theme === "dark" ? "#5f1854" : "#5e227f"};
  border-top: 10px dotted ${props => 
   props.theme === "original" ? "black" : 
   props.theme === "light" ? "#ffffff" : 
   props.theme === "dark" ? "black" : "#7cbd1e"};
  border-bottom: 10px dotted ${props => 
   props.theme === "original" ? "black" : 
   props.theme === "light" ? "#ffffff" : 
   props.theme === "dark" ? "black" : "#d22780"};
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const InputContainer = styled.div`
 display: flex;
 flex-direction: column;
`

export const Input = styled.input`
 padding: 10px 15px;
 border: none;
 box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
 font-size: 20px;
 width: 600px;
`

export const Button = styled.button`
 padding: 10px;
 border-top-right-radius: 10px;
 border-bottom-right-radius: 10px;
 border: none;
 box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
 font-size: 20px;
 font-weight: 600;
 cursor: pointer;
 background: ${props => 
  props.theme === "original" ? "#ffe0e0" : 
  props.theme === "light" ? "#f9f6f7" : 
  props.theme === "dark" ? "black" : "#d22780"};
 color: ${props => 
  props.theme === "original" ? "black" : 
  props.theme === "light" ? "#929aab" : 
  props.theme === "dark" ? "#efdfbf" : "#f8b500"};
`

export const TasksList = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  height: 630px;
  width: 80%;
  border: 10px dotted ${props => 
  props.theme === "original" ? "#efdfbf" : 
  props.theme === "light" ? "white" : 
  props.theme === "dark" ? "#5f1854" : "#d22780"};
  background-color: ${props => 
  props.theme === "original" ? "#faf6e9" : 
  props.theme === "light" ? "#ffe8d6" : 
  props.theme === "dark" ? "#3b0944" : "#1e56a0"};
  padding: 30px 0;
  border-radius: 20px;
  overflow-y: scroll;
`
