import React, {FC, useState} from 'react';
import { useAppDispatch, useAppSelector} from '../hooks';
import { allDoneTasks } from '../../features/allcheckedtaskSlice';
import { HeaderContainer, Logo, Menu, Theme, Input, Congratulations} from './styles/Header.styled';

const Header: FC = () => {

  const [allchecked, setAllChecked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const allcheckedtask = useAppSelector((state) => state.allcheckedtask.value);
  

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
            <Theme>Original</Theme>
            <Theme>Light</Theme>
            <Theme>Dark</Theme>
            <Theme>Crazy</Theme>
        </Menu>
        <Congratulations color={allcheckedtask}> Well Done 😄</Congratulations>
    </HeaderContainer>
  )
}

export default Header;