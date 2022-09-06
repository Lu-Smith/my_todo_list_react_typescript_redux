import React, {FC} from 'react'
import { MainContainer, NewTask, Button, TasksList, AddedTasks, Input } from './styles/Main.styled';

const Main: FC = () => {
  return (
    <MainContainer>
        <NewTask>
            <Input type='text' placeholder='task name'/>
            <Button>Add</Button>
        </NewTask>
        <TasksList>
            <AddedTasks>I have to do this</AddedTasks>
        </TasksList>
    </MainContainer>
  )
}

export default Main;