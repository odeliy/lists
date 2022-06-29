import styled from 'styled-components'
import {
  colorBackground,
  colorSecondary,
  colorShadow,
  colorWhite,
  defaultPadding,
  fontLarge,
  fontMedium,
} from '../../../../stylesData'

const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .list-item__index {
    font-weight: bold;
    font-size: ${fontMedium};
  }

  .list-item__checkbox {
    margin-left: 5px;
  }

  .list-item__color-marker {
    min-width: 20px;
    max-width: 100px;
    width: 20%;
    height: 20px;
    margin-left: 5px;
    border: 1px solid ${colorShadow};
  }

  .list-item__list-item {
    width: 70%;
    font-size: ${fontMedium};
    background-color: ${colorWhite};
    padding: 0 5px;
    border: none;
  }

  .list-item__color-picker {
    width: 20px;
    height: 20px;
    margin-right: calc(${defaultPadding} / 2);
    border: 1px solid ${colorSecondary};
  }

  .list-item__delete-item {
    font-size: ${fontLarge};
  }
`

export default StyledListItem
