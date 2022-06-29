import React, { useState, useEffect } from 'react'
import StyledNavbar from './StyledNavbar'
import { VscListSelection } from 'react-icons/vsc'

function Navbar() {
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    if (animation)
      setTimeout(() => {
        setAnimation(false)
      }, 1050)
  }, [animation])

  return (
    <StyledNavbar>
      <header
        className={animation ? 'animate' : ''}
        onClick={() => setAnimation((prev) => !prev)}
      >
        <span className="header__title">Lists</span>
        <VscListSelection className="header__logo" />
      </header>
    </StyledNavbar>
  )
}

export default Navbar
