import {Container} from '../../styled/index';
import { MainHeader, HeaderWrapper, StyledTitle as Title } from './styled';
import backArrowImage from '../../../assets/img/icon-arrow-back.svg'
import { NavLink } from "react-router-dom";

export default function Header({children, isBackLinkActive, setHeaderTitle}) {
  return (
    <MainHeader>
      <Container>
        <HeaderWrapper>
          {
            isBackLinkActive && 
            <NavLink to='/' title="Назад" onClick={() => {setHeaderTitle('')}}>
              <img src={backArrowImage} width="17" height="16" alt="" aria-hidden="true" />
            </NavLink>
          }
          <Title>{children}</Title>
        </HeaderWrapper>
      </Container>
    </MainHeader>
  )
}