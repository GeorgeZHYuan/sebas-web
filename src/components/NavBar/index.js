import React from 'react'
import styled from 'styled-components'

import colors from 'styles'

const NavBarContainer = styled.div`
  height: 80px;
  width: 100%;

  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.grey};
`

const NavBar = () => {
  return <NavBarContainer/>
}

export default NavBar
