import React, {FC, useState} from 'react';
import { AddedTasksContainer, Input, TaskName, Button } from './styles/AddedTasks.styled';

interface Props {
    task: string
}

const AddedTasks: FC<Props> = ({task}) => {

    const [checked, setChecked] = useState<boolean>(false);

    const handleChecked = () => {
        
    }

  return (
    <AddedTasksContainer>
        <Input type='checkbox' onClick={handleChecked}/>
        <TaskName>{task}</TaskName>
        <Button className="material-symbols-outlined">delete</Button>    
    </AddedTasksContainer>
  )
}

export default AddedTasks;