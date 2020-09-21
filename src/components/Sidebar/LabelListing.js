import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'

import Label from './Label'
import { setActiveLabels } from 'store/actions/labelActions'

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
  toggleLabels(id) {
    this.props.setActiveLabels(id)
  }

  render () {
    return <LLContainer>
      <LLTitle>{this.props.sectionTitle}</LLTitle>
      {this.props.labels.length !== 0 &&
        <LLListings>
          {this.props.labels.map((label) => {
            return <Label
              key={label._id}
              color={label.color}
              name={label.name}
              onClick={() => this.toggleLabels(label._id)}/>
          })}
        </LLListings>
      }
    </LLContainer>
  }
}

export default connect(state => ({}), { setActiveLabels })(LabelListing)
