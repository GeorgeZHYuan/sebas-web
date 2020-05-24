import React from 'react'
import styled from 'styled-components'

const LabelContainer = styled.div`
  display: flex;
  flex-direction: columns;
  width: 100%;
`
const Circle = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
`
const LabelTitle = styled.div`
  margin-left: 5px;
  word-wrap: normal;
`

const Label = (props) => {
  return <LabelContainer>
    <Circle style={{backgroundColor: `${props.color}` }} />
    <LabelTitle>{props.title}</LabelTitle>
  </LabelContainer>
}

export default Label
