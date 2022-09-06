import styled from 'styled-components';

export const FooterContainer = styled.div`
 background: ${props => props.color === "allundone" ? "white" : "black"};
 color:  ${props => props.color === "allundone" ? "black" : "white"};
 padding: 10px 0;
 font-size: 20px;
 line-height: 30px;

 a {
    color: ${props => props.color === "allundone" ? "black" : "white"};
    text-decoration: none;
    font-weight: 600;
    transition: all 200ms ease-in-out;
 }

 a:hover {
    color: ${props => props.color === "allundone" ? "black" : "white"};
    border-bottom: 2px solid #282A36;
 }
`

