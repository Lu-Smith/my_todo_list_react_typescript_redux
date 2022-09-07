import React, {FC, useState} from 'react';
import { useAppDispatch, useAppSelector} from '../hooks';
import { allDoneTasks } from '../../features/allcheckedtaskSlice';
import { HeaderContainer, Logo, Menu, Theme, Input, Congratulations} from './styles/Header.styled';
import { changeTheme } from '../../features/changethemesSlice';

const Header: FC = () => {

  const [allchecked, setAllChecked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const allcheckedtask = useAppSelector((state) => state.allcheckedtask.value);
  const changethemes = useAppSelector((state) => state.changethemes.value);

  const handleAllChecked = () => {
      if (allchecked === false) {
          dispatch(allDoneTasks("alldone"));
          setAllChecked(true);
      } else {
          dispatch(allDoneTasks("allundone"));
          setAllChecked(false);
      }
  }

  return (
    <HeaderContainer color={allcheckedtask}>
        <Logo>
            Todo List <Input type='checkbox' onClick={handleAllChecked}/>
        </Logo>
        <Menu>
            <Theme theme={changethemes} onClick={(e) => {dispatch(changeTheme('original'))}}>Original</Theme>
            <Theme theme={changethemes} onClick={(e) => {dispatch(changeTheme('light'))}}>Light</Theme>
            <Theme theme={changethemes} onClick={(e) => {dispatch(changeTheme('dark'))}}>Dark</Theme>
            <Theme theme={changethemes} onClick={(e) => {dispatch(changeTheme('crazy'))}}>Crazy</Theme>
        </Menu>
        <Congratulations color={allcheckedtask}> Well Done 😄</Congratulations>
    </HeaderContainer>
  )
}

export default Header;