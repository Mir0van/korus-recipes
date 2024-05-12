import styled from 'styled-components';
import { Typography } from 'antd';

const { Title } = Typography;

export const MainHeader = styled.header`
  margin-top: 12px;
`

export const HeaderWrapper = styled.div`
  background-color: ${props => props.theme.colorBlockBackground};
  padding: 22px 24px;
`

export const StyledTitle = styled(Title)`
  &.ant-typography {
    margin: 0;
    line-height: 1.16667;
  }
`;
