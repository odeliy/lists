import styled from 'styled-components'
import {
  siteWidth,
  colorPrimary,
  colorWhite,
  colorShadow,
  defaultPadding,
  fontLarge,
} from '../../stylesData'

const StyledNavbar = styled.div`
  color: ${colorWhite};
  background-color: ${colorPrimary};
  box-shadow: 0px 3px 5px ${colorShadow};

  header {
    height: 60px;
    max-width: ${siteWidth};
    margin-inline: auto;
    padding-left: ${defaultPadding};
    padding-right: ${defaultPadding};
    display: flex;
    align-items: center;

    .header__title {
      font-size: ${fontLarge};
    }

    .header__logo {
      font-size: ${fontLarge};
      margin-left: 5px;
    }
  }
`
export default StyledNavbar
