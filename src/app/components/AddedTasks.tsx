import React, {FC} from 'react';
import {removeTask} from '../../features/newtaskSlice';
import {useAppDispatch} from '../hooks';
import {AddedTasksContainer, Input, TaskName, Button} from './styles/AddedTasks.styled';

interface Props {
    task: string
    index: number
}

const AddedTasks: FC<Props> = ({task, index}) => {

    const dispatch = useAppDispatch();

const handleRemoveClick = () => {
   dispatch(removeTask(index));
}

  return (
    <AddedTasksContainer>
          <Input type='checkbox' />
          <TaskName>{task}</TaskName>
          <Button className="material-symbols-outlined" onClick={handleRemoveClick}>delete</Button>
          
    </AddedTasksContainer>
  )
}

export default AddedTasks;