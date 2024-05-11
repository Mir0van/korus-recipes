import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
  /* font-family: 'Roboto'; */
`;

const TestTitle = styled(Title)`
  text-transform: uppercase;
`;

export default function Header() {
  return (
    <header>
      <Title>Сборник рецептов из разных стран мира</Title>
      <TestTitle>qwe qwerty</TestTitle>
    </header>
  )
}