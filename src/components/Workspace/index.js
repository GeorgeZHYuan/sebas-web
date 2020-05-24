import React from 'react'
import styled from 'styled-components'

import { NavBar, KanBan } from 'components'

const WorkspaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
`

class Workspace extends React.Component {
  render() {
    return (
      <WorkspaceContainer>
        <NavBar/>
        <KanBan/>
      </WorkspaceContainer>
    )
  }
}

export default Workspace
