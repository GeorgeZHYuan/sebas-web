import React from 'react';
import styled from 'styled-components'

import {
  LabelMenu,
  Workspace
} from 'components'

const AppContainer = styled.div`
  display: flex;
  flex-direction: columns;

  width: 100%;
  height: 100vh;
`

function App() {
  return (
    <AppContainer>
      <LabelMenu />
      <Workspace />
    </AppContainer>
  );
}

export default App;
