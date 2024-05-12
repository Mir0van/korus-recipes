import styled from "styled-components";
import { Typography } from 'antd';

const { Title } = Typography;

export const Section = styled.section`
  background-color: ${props => props.theme.colorBlockBackgroundSecondary};
  margin-right: 14px;
`

export const TitleWrapper = styled.div`
  background-color: ${props => props.theme.colorBlockBackground};
  padding: 16px 24px;
  box-shadow: inset 0 -1px 0 0 #f0f0f0;

  display: flex;
  align-items: center;
  gap: 0 12px;
`

export const SectionTitle = styled(Title)`
  &.ant-typography {
    margin: 0;
    font-size: 20px;
    line-height: 1.2;
  }
`

export const CardsWrapper = styled.div`
  padding: 12px;
`

export const CardsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  margin-bottom: 22px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px 12px;
`