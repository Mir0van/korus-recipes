import {Container} from '../../styled/index';
import { MainHeader, HeaderWrapper, StyledTitle as Title } from './styled';

export default function Header() {
  return (
    <MainHeader>
      <Container>
        <HeaderWrapper>
          <Title>Сборник рецептов из разных стран мира</Title>
        </HeaderWrapper>
      </Container>
    </MainHeader>
  )
}