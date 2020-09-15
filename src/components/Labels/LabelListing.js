import React from 'react';
import styled from 'styled-components'

import Label from './Label'

const LLContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`
const LLTitle = styled.h3`
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
`

const LLListings = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  & > div:nth-child(n) {
    margin-bottom: 10px;
  }

  & > div:last-child {
    margin-bottom: 0px;
  }
`

class LabelListing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sectionTitle: this.props.sectionTitle,
      labels: this.props.labels
    }

  }
  render () {
    return <LLContainer>
      <LLTitle>{this.state.sectionTitle}</LLTitle>

      {this.state.labels.length !== 0 &&
        <LLListings>
          {this.state.labels.map((item, i) => {
            return <Label
              key={item._id}
              color={item.color}
              name={item.name}/>
          })}
        </LLListings>
      }

    </LLContainer>
  }
}

export default LabelListing
