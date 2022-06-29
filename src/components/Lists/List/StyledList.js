import styled from 'styled-components'
import {
  colorShadow,
  colorWhite,
  defaultBorderRadius,
  defaultPadding,
} from '../../../stylesData'

const StyledList = styled.div`
  margin-bottom: ${defaultPadding};
  padding: ${defaultPadding};
  background-color: ${colorWhite};
  box-shadow: 2px 3px 3px ${colorShadow};
  border-radius: ${defaultBorderRadius};

  .list__button-holder {
    margin-top: calc(${defaultPadding} / 2);
    margin-bottom: calc(${defaultPadding} / 2);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export default StyledList
