import React, {FC, useState} from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { doneTask } from '../../features/checkedtaskSlice';
import { AddedTasksContainer, Input, TaskName, Button } from './styles/AddedTasks.styled';

interface Props {
    task: string
}

const AddedTasks: FC<Props> = ({task}) => {

    const [checked, setChecked] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const checkedtask = useAppSelector((state) => state.checkedtask.value);

    const handleChecked = () => {
        if (checked === false) {
            dispatch(doneTask("done"));
            setChecked(true);
        } else {
            dispatch(doneTask("undone"));
            setChecked(false);
        }
    }

  return (
    <AddedTasksContainer color={checkedtask}>
          <Input type='checkbox' onClick={handleChecked}/>
          <TaskName>{task}</TaskName>
          <Button className="material-symbols-outlined">delete</Button>
    </AddedTasksContainer>
  )
}

export default AddedTasks;