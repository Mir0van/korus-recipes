import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  header,
  footer {
    flex-shrink: 0;
  }

  main {
    flex-grow: 1;
  }
`