import styled from "styled-components";
import { Typography } from 'antd';
const { Text, Title, Paragraph } = Typography;

export const RecipeItem = styled.li`
  background-color: ${props => props.theme.colorBlockBackground};
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #f0f0f0;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const DescriptionWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`

export const TitleWrapper = styled.div`
  padding: 10px 24px;
  min-height: 60px;
  box-shadow: inset 0 -1px 0 0 #f0f0f0;

  display: flex;
  align-items: center;
`

export const ImageWrapper = styled.div`
  flex-grow: 1;
  aspect-ratio: 226/294;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export const DefinitionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* margin-bottom: ${props => props.indent ? '-4px' : '0'}; */
  /* gap: ${props => props.star ? '5px' : props.clock ? '5px 8px' : '5px 11px'}; */
  gap: 5px 11px;
`

export const DefinitionWrapperClock = styled(DefinitionWrapper)`
  margin-bottom: -4px;
  gap: 5px 8px
`

export const DefinitionWrapperStar = styled(DefinitionWrapper)`
  gap: 5px;
`

export const AntdTitle = styled(Title)`
  &.ant-typography {
    font-weight: 500;
    font-size: 16px;
    line-height: 1;
    color: ${props => props.theme.colorTextThird};

    margin: 0;
  }
`

export const AntdDescription = styled(Paragraph)`
  &.ant-typography {
    font-weight: 400;
    font-size: 10px;
    line-height: 1.2;
    margin: 0;
    margin-bottom: -7px;
  }
`

export const AntdText = styled(Text)`
  font-weight: 400;
  font-size: 12px;
  color: ${props => props.theme.colorTextThird};
`