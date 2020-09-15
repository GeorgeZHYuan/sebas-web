import React from 'react';
import styled from 'styled-components'

import { Provider } from 'react-redux'
import store from './store'

import {
  Sidebar,
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
    <Provider store={store}>
      <AppContainer>
        <Sidebar />
        <Workspace />
      </AppContainer>
    </Provider>
  );
}

export default App;
