import React, {FC} from 'react';
import {useAppSelector} from '../hooks';
import {FooterContainer} from './styles/Footer.styled';

const Footer: FC = () => {

  const allcheckedtask = useAppSelector((state) => state.allcheckedtask.value);

  return (
    <FooterContainer color={allcheckedtask}>Coded by  
        <a href='https://www.lunasmithart.com/' target='_blank' rel="noreferrer"> Luna Smith</a>, open source on <a href='https://github.com/Lu-Smith/my_todo_list_react_typescript_redux' target='_blank' rel="noreferrer">GitHub</a>.
    </FooterContainer>
  )
}

export default Footer;