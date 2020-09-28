import React from 'react'
import styled from 'styled-components'

import {
  NavBar,
  TaskDisplayer
} from 'components'

const WorkspaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
`

const Workspace = () => {
    return <WorkspaceContainer>
      <NavBar/>
      <TaskDisplayer/>
    </WorkspaceContainer>
}

export default Workspace
