import styled from 'styled-components';

export const HeaderContainer = styled.div`
 background: ${props => props.color === "allundone" ? "transparent" : "#ec729c"};
 color:  ${props => props.color === "allundone" ? "black" : "#efdfbf"};
 padding: 10px 0;
 font-size: 20px;
 line-height: 50px;
 display: flex;
 flex-direction: row;
`

export const Logo = styled.div`
 width: 30%;
 font-family: 'Carter One', cursive;
 font-size: 30px;
 text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

 @media (max-width: 900px) {
   width: 25%;
 }

 @media (max-width: 480px) {
   font-size: 18px;
   width: 30%;
 }
`

export const Menu = styled.ul`
 width: 50%;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: end;

 @media (max-width: 900px) {
  width: 50%;
 }

 @media (max-width: 480px) {
   width: 70%;
 }
`

export const Theme = styled.li`
list-style: none;
padding: 5px 15px;
line-height: 30px;
transition: all 200ms ease-in-out;
background-color: ${props => 
props.theme === "original" ? "#79d1c3" : 
props.theme === "light" ? "#f9f6f7" : 
props.theme === "dark" ? "black" : "orange"};
border-radius: 10px;
margin-right: 5px;
color: ${props => 
props.theme === "original" ? "black" : 
props.theme === "light" ? "#929aab" : 
props.theme === "dark" ? "#efdfbf" : "white"};
cursor: pointer;
box-shadow: 0 -5px 2px ${props => 
  props.theme === "original" ? "black" : 
  props.theme === "light" ? "#ffe8d6" : 
  props.theme === "dark" ? "#f5b553" : "#7cbd1e"};
;

&:hover {
    font-weight: 600;
    transform: translateY(-4px);
    box-shadow: none;
}

@media (max-width: 480px) {
    font-size: 14px;
    padding: 2px 10px;
    line-height: 25px;
  }
`

export const Input = styled.input`
    width: 35px;
    height: 35px;
    cursor: pointer;
    position: relative;
    top: 5px;
    left: 5px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

    @media (max-width: 480px) {
      width: 20px;
      height: 20px;
    }
`

export const Congratulations = styled.div`
     display: ${props => props.color === "allundone" ? "none" : ""};
     width: 20%;
     font-size: 25px;

     @media (max-width: 900px) {
      width: 25%;
     }

     @media (max-width: 480px) {
      display: none;
      width: 0%;
     }
`