import styled from 'styled-components';
import { Typography } from 'antd';
import { visuallyHidden } from '../../mixins/mixins';
import { Timeline, Image } from 'antd';
const { Text, Title } = Typography;

export const Section = styled.section`
  margin-top: 12px;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 465px 465px 1fr;
  gap: 12px;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ButtonsWrapper = styled.div`
  padding: 12px 0;
  display: flex;
  gap: 12px;
  justify-content: center;
`

export const ColumnSecondary = styled(Column)`
  padding: 12px;
  background-color: ${props => props.theme.colorBlockBackgroundSecondary};
`

export const ImageWrapper = styled.div`
  flex-grow: 1;
  aspect-ratio: 918 / 760;
  max-height: 760px;
  background-color: ${props => props.theme.colorBlockBackground};

  display: flex;
  flex-direction: column;

  .ant-image {
    flex-grow: 1;
  }
`

export const StyledImage = styled(Image)`
  flex-grow: 1;

  &.ant-image-img {
    width: 100%;
    height: 100%;
    aspect-ratio: 918 / 760;
    object-fit: cover;
  }


`

export const TextWrapper = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`

export const TextWrapperSecondary = styled(TextWrapper)`
  padding: 24px;
  padding-bottom: 23px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colorBlockBackground};
  border-radius: 2px;

  ${TextWrapper}:not(:last-child) {
    box-shadow: inset 0 -1px 0 0 #f0f0f0;
  }
`

export const SectionTitle = styled(Title)`
  ${visuallyHidden}
`

export const AntdTitle = styled(Title)`
  &.ant-typography {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: ${props => props.theme.colorTextThird};

    margin: 0;
  }
`

export const AntdText = styled(Text)`
  &.ant-typography {
    font-size: 16px;
    line-height: 1.5;
    color: ${props => props.theme.colorTextThird};

    margin: 0;
  }
`

export const AntdTextSecondary = styled(Text)`
  &.ant-typography {
    font-size: 16px;
    line-height: 1.5;

    margin: 0;
  }
`

export const StyledTimeline = styled(Timeline)`
  padding: 7px 5px;

  .ant-timeline-item-head {
    padding: 0;
  }

  &.ant-timeline {
    .ant-timeline-item {
      padding-bottom: 24px;
    }
  }
`
