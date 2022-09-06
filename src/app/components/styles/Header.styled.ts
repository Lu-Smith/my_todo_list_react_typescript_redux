import styled from 'styled-components';

export const HeaderContainer = styled.div`
 background: ${props => props.color === "allundone" ? "transparent" : "black"};
 color:  ${props => props.color === "allundone" ? "black" : "white"};
 padding: 10px 0;
 font-size: 20px;
 line-height: 50px;
 display: flex;
 flex-direction: row;
 align-items: center;
`

export const Logo = styled.div`
 width: 30%;
 font-family: 'Carter One', cursive;
 font-size: 30px;
`

export const Menu = styled.ul`
 width: 50%;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: end;
 padding-right: 30px;
`

export const Theme = styled.li`
list-style: none;
padding: 5px 15px;
line-height: 30px;
transition: all 200ms ease-in-out;
background-color: #9896f1;
border-radius: 20px;
margin-right: 5px;
color: white;

&:hover {
    font-weight: 600;
}
`

export const Input = styled.input`
    width: 35px;
    height: 35px;
    cursor: pointer;
    position: relative;
    top: 5px;
    left: 5px;
`

export const Congratulations = styled.div`
     display: ${props => props.color === "allundone" ? "none" : ""};
     width: 20%;
     font-size: 25px;
`