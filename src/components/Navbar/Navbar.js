import React from 'react'
import StyledNavbar from './StyledNavbar'
import { VscListSelection } from 'react-icons/vsc'

function Navbar() {
  return (
    <StyledNavbar>
      <header>
        <span className="header__title">Lists</span>
        <VscListSelection className="header__logo" />
      </header>
    </StyledNavbar>
  )
}

export default Navbar
