import React, {FC} from 'react';
import { HeaderContainer, Logo, Menu, Theme, Input} from './styles/Header.styled';

const Header: FC = () => {
  return (
    <HeaderContainer>
        <Logo>
            Todo List <Input type='checkbox' />
        </Logo>
        <Menu>
            <Theme>Original</Theme>
            <Theme>Light</Theme>
            <Theme>Dark</Theme>
            <Theme>Crazy</Theme>
        </Menu>
    </HeaderContainer>
  )
}

export default Header;