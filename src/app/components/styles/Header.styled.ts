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
`

export const Menu = styled.ul`
 width: 50%;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: end;
`

export const Theme = styled.li`
list-style: none;
padding: 5px 15px;
line-height: 30px;
transition: all 200ms ease-in-out;
background-color: black;
border-radius: 10px;
margin-right: 5px;
color: #ffe0e0;
cursor: pointer;
box-shadow: 0 -5px 2px #ffc0d0;
;

&:hover {
    font-weight: 600;
    transform: translateY(-4px);
    box-shadow: none;
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
`

export const Congratulations = styled.div`
     display: ${props => props.color === "allundone" ? "none" : ""};
     width: 20%;
     font-size: 25px;
`