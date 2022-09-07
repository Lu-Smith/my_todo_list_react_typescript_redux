import styled from 'styled-components';

export const FooterContainer = styled.div`
 background: ${props => props.color === "allundone" ? "#efdfbf" : "#ec729c"};
 color:  ${props => props.color === "allundone" ? "black" : "#efdfbf"};
 padding: 10px 0;
 font-size: 20px;
 line-height: 30px;

 a {
    color: ${props => props.color === "allundone" ? "black" : "#efdfbf"};
    text-decoration: none;
    font-weight: 600;
    transition: all 200ms ease-in-out;
 }

 a:hover {
    color: ${props => props.color === "allundone" ? "#494949" : "white"};
 }
`

