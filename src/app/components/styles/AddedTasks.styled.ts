import styled from 'styled-components';


export const AddedTasksContainer = styled.div`

 background: ${props => props.color === "undone" ? "#ffe0e0" : "#efdfbf"};
 padding: 10px 0;
 font-size: 20px;
 line-height: 30px;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 font-family: 'Indie Flower', cursive;
 border-bottom: 2px solid #fffafa;
 border-radius: 10px;
 width: 80%;
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
    width: 300px;
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
        color: #ffc0d0;

    }
`
