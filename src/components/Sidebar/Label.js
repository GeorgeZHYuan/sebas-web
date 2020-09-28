import React from 'react'
import PropTypes from 'prop-types';
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

const Label = ({
  color,
  name,
  onClick
}) => {
  return <LabelContainer onClick={() => onClick()}>
    <Circle style={{backgroundColor: `${color}` }} />
    <LabelTitle>{name}</LabelTitle>
  </LabelContainer>
}

Label.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Label
