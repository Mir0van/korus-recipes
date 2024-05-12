import styled from "styled-components";
import { Typography, Button, Select, Radio } from 'antd';
import {visuallyHidden} from "../../mixins/mixins";

const { Text, Title } = Typography;

export const Section = styled.section`
  background-color: ${props => props.theme.colorBlockBackground};
`

export const SectionWrapper = styled.div`
  padding: 24px;
`

export const DescriptionWrapper = styled(SectionWrapper)`
  margin-bottom: 48px;
`

export const ContentWrapper = styled.div`
  padding-top: 24px;
  
  display: grid;
  row-gap: 18px;
  `

export const SelectWrapper = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  column-gap: 12px;
  align-items: center;
  margin-bottom: 17px;
`

export const LuckyWrapper = styled.div`
  margin-top: 40px;
  display: grid;
  justify-items: start;
`

export const LuckyText = styled(Text)`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 24px;
  opacity: 0.5;
`

export const HiddenTitle = styled(Title)`
  ${visuallyHidden}
`

export const SelectText = styled(Text)`
  justify-self: end;
  font-weight: 700;
  line-height: 1.5;
  text-align: right;
  font-size: 16px;
`

export const ResetButton = styled(Button)`
  /* opacity: 0.3; */
  padding: 0;

  &.ant-btn-link:disabled{
    color: ${props => props.theme.colorAccent};
    opacity: 0.3;
  }
`

export const StyledSelect = styled(Select)`
  width: 285px;
  height: 38px;

  .ant-select-selector {
    padding: 0 15px !important;
  }

  .ant-select-arrow {
    inset-inline-end: 16px;
  }
`

export const StyledRadioButton = styled(Radio.Button)`
  width: 71px;
  padding: 0;
  height: 40px;
  background-color: #ffffff;
  opacity: ${props => props.disabled ? '0.8' : '1'};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

