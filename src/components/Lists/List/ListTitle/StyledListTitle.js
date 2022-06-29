import styled from 'styled-components'
import { defaultPadding, fontLarge } from '../../../../stylesData'

const StyledListTitle = styled.div`
  .list-title {
    display: flex;
    align-items: center;

    .list-title__checkmark {
      font-size: ${fontLarge};
      margin-left: calc(${defaultPadding} / 2);
    }
  }

  .list-title__title {
    font-size: ${fontLarge};
  }
`
export default StyledListTitle
