import React from 'react'
import styled from 'styled-components'

const TCContainer = styled.div`
  border-radius: 25px;
  margin-bottom: 25px;
`
const TCTitle = styled.h3`
`

class TaskCard extends React.Component {
  render() {
    return <TCContainer>
      <TCTitle>{this.props.name}</TCTitle>
    </TCContainer>
  }
}

export default TaskCard
