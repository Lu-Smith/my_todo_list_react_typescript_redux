import styled from 'styled-components';

export const MainContainer = styled.div`
 background: #8ef6e4; 
 color: black;
 padding: 10px 0;
 font-size: 20px;
 line-height: 30px;
`

export const NewTask = styled.div`
  margin-top: 20px;
  background: #d59bf6;
  padding: 20px 0;
`

export const Input = styled.input`
 padding: 10px 15px;
 border-top-left-radius: 10px;
 border-bottom-left-radius: 10px;
 border: none;
 box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
 font-size: 20px;
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
`

export const TasksList = styled.div`
  color: red;
`

export const AddedTasks = styled.div`
  color: red;
`