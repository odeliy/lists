import styled from 'styled-components'
import {
  colorBackground,
  colorBlack,
  colorLink,
  colorPrimary,
  colorSecondary,
  colorWhite,
  defaultBorderRadius,
  fontSmall,
} from './stylesData'

const StyledApp = styled.div`
  min-height: 100vh;
  color: ${colorBlack};
  background-color: ${colorBackground};
  padding-bottom: 80px;

  a {
    color: ${colorLink};
  }

  button {
    font-size: ${fontSmall};
    padding: 0.5em 1em;
    border-radius: ${defaultBorderRadius};
    border: 0;
    background-color: ${colorSecondary};
  }

  .button--primary {
    color: ${colorWhite};
    background-color: ${colorPrimary};
  }

  .button--secondary {
  }
`
export default StyledApp
