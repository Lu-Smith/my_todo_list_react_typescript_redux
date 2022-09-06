import React, {FC} from 'react';
import {FooterContainer} from './styles/Footer.styles';

const Footer: FC = () => {
  return (
    <FooterContainer>Coded by  
        <a href='https://www.lunasmithart.com/' target='_blank' rel="noreferrer"> Luna Smith</a>, open source on <a href='https://github.com/Lu-Smith/my_todo_list_react_typescript_redux' target='_blank' rel="noreferrer">GitHub</a>.
    </FooterContainer>
  )
}

export default Footer;