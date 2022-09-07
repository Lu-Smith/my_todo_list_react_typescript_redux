import styled from 'styled-components';


export const MainContainer = styled.div`
 background: #fffafa;
 color: black;
 padding: 10px 0;
 font-size: 20px;
 line-height: 30px;
 height: 87%;
`

export const NewTask = styled.div`
  margin-top: 20px;
  background: #ffc0d0;
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
  margin: 0 auto;
  margin-top: 30px;
  height: 660px;
  width: 70%;
  border: 4px solid #ffc0d0;
  background-color: #fffafa;
  padding: 30px;
  border-radius: 20px;
  overflow-y: scroll;
`
