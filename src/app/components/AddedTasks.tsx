import React, {FC, useState} from 'react';
import {removeTask} from '../../features/newtaskSlice';
import {useAppDispatch} from '../hooks';
import {AddedTasksContainer, Input, TaskName, Button} from './styles/AddedTasks.styled';

interface Props {
    task: string
    index: number
}

const AddedTasks: FC<Props> = ({task, index}) => {

    const [congrats, setCongrats] = useState("undone");
    const dispatch = useAppDispatch();

const handleRemoveClick = () => {
   dispatch(removeTask(index));
}

const handleChange = () => {
  if (congrats === "undone") {
    setCongrats("done");
  } else {
    setCongrats("undone");
  }
  
}

  return (
    <AddedTasksContainer color={congrats}>
          <Input type='checkbox' onChange={handleChange}/>
          <TaskName>{task}</TaskName>
          <Button className="material-symbols-outlined" onClick={handleRemoveClick}>delete</Button>
    </AddedTasksContainer>
  )
}

export default AddedTasks;