import styled from 'styled-components'
import {
  colorLink,
  defaultPadding,
  fontLarge,
  siteWidth,
} from '../../stylesData'

const StyledLists = styled.div`
  max-width: ${siteWidth};
  margin-inline: auto;
  margin-top: ${defaultPadding};
  padding-left: ${defaultPadding};
  padding-right: ${defaultPadding};

  .lists__title {
    font-size: ${fontLarge};
  }

  .lists__psuedo-link {
    color: ${colorLink};
    cursor: pointer;
  }

  .lists__button-holder {
    margin-top: ${defaultPadding};
    padding-left: ${defaultPadding};
    padding-right: ${defaultPadding};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export default StyledLists
