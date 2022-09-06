import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addTask } from '../../features/newtaskSlice';
import AddedTasks from './AddedTasks';
import { MainContainer, NewTask, Button, TasksList, Input } from './styles/Main.styled';

const Main: FC = () => {
    
    const [createTask, setCreateTask] = useState<string>("");
    const dispatch = useAppDispatch();
    const newtasks = useAppSelector((state) => state.newtask.value)
  

    const handleAddTask = (): void => {
        if(!createTask) return;
        dispatch(addTask(createTask));
        setCreateTask("");
    }

  return (
    <MainContainer>
        <NewTask>
            <Input type='text' value={createTask} placeholder='task name' onChange={(e) => setCreateTask(e.target.value)}/>
            <Button onClick={handleAddTask}>Add</Button>
        </NewTask>
        <TasksList>
            {newtasks.map((task: string, index:number) => {
               return <AddedTasks key={index} task={task}/>
            })}
        </TasksList>
    </MainContainer>
  )
}

export default Main;