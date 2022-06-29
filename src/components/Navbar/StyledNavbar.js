import styled, { keyframes } from 'styled-components'
import headShake from 'react-animations/lib/headShake'
import {
  siteWidth,
  colorPrimary,
  colorWhite,
  colorShadow,
  defaultPadding,
  fontLarge,
} from '../../stylesData'

const headShakeAnimation = keyframes`${headShake}`

const StyledNavbar = styled.div`
  color: ${colorWhite};
  background-color: ${colorPrimary};
  box-shadow: 0px 3px 5px ${colorShadow};

  .animate {
    animation: 1s ${headShakeAnimation};
  }

  header {
    height: 60px;
    max-width: ${siteWidth};
    margin-inline: auto;
    padding-left: ${defaultPadding};
    padding-right: ${defaultPadding};
    display: flex;
    align-items: center;
    cursor: pointer;

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
