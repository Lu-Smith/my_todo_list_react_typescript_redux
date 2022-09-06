import React, {FC, useState} from 'react';
import { useAppDispatch } from '../hooks';
import { doneTask } from '../../features/checkedtaskSlice';
import { AddedTasksContainer, Input, TaskName, Button } from './styles/AddedTasks.styled';

interface Props {
    task: string
}

const AddedTasks: FC<Props> = ({task}) => {

    const [checked, setChecked] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handleChecked = () => {
        if (checked === false) {
            dispatch(doneTask("done"));
            setChecked(true);

        } else {
            setChecked(false);
        }
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