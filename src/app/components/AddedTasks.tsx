import React, {FC} from 'react';
import { AddedTasksContainer, Input, TaskName, Button } from './styles/AddedTasks.styled';

interface Props {
    task: string
}

const AddedTasks: FC<Props> = ({task}) => {
  return (
    <AddedTasksContainer>
        <Input type='checkbox' />
        <TaskName>{task}</TaskName>
        <Button className="material-symbols-outlined">delete</Button>
        
    </AddedTasksContainer>
  )
}

export default AddedTasks;