import styled from 'styled-components';


export const AddedTasksContainer = styled.div`

 background: ${props => 
  props.theme === "original" ? "#ffe0e0" : 
  props.theme === "light" ? "white" : 
  props.theme === "dark" ? "black" : "#7cbd1e"};
 padding: 10px 0;
 font-size: 20px;
 line-height: 30px;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 font-family: 'Indie Flower', cursive;
 border-bottom: 4px solid ${props => 
  props.theme === "original" ? "#faf6e9" : 
  props.theme === "light" ? "#ffe8d6" : 
  props.theme === "dark" ? "#3b0944" : "#1e56a0"};
 border-left: 4px solid ${props => 
  props.color === "undone" ? "transparent": "#ec729c"};
 border-right: 4px solid ${props => 
  props.color === "undone" ? "transparent": "#ec729c"};
 border-radius: 10px;
 width: ${props => 
  props.color === "undone" ? "80%": "70%"};
 margin: 0 auto;
 `

export const Input = styled.input`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    cursor: pointer;
`
export const TaskName = styled.div`
    font-size: 30px;
    margin-right: 10px;
    width: ${props => 
      props.color === "undone" ? "800px": "600px"};
    color: ${props => 
     props.theme === "original" ? "black" : 
     props.theme === "light" ? "#929aab" : 
     props.theme === "dark" ? "#efdfbf" : "#fffdf6"};
`

export const Deadline = styled.input`
    font-size: 20px;
    padding: 5px 15px;
    margin-right: 10px;
    width: 200px;
    color: ${props => 
     props.theme === "original" ? "black" : 
     props.theme === "light" ? "#929aab" : 
     props.theme === "dark" ? "black" : "#7cbd1e"};
     border: none;
`

export const Button = styled.button`
    border: none;
    background: transparent;
    font-size: 40px;
    color: white;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
        color: ${props => 
           props.theme === "original" ? "#ffc0d0" : 
           props.theme === "light" ? "#929aab" : 
           props.theme === "dark" ? "#efdfbf" : "#fd0054"};

    }
`
