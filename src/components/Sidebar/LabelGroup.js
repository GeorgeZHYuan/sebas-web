import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'

import Label from './Label'
import { setActiveLabels } from 'store/actions/labelActions'

const LGContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`
const LGTitle = styled.h3`
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
`
const LGListings = styled.div`
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

class LabelGroup extends React.Component {
  toggleLabels(label) {
    this.props.setActiveLabels(label)
  }

  render() {
    return <LGContainer>
      <LGTitle>{this.props.sectionTitle}</LGTitle>
      <LGListings>
        {this.props.labels.map((label) =>
          <Label
            key={label._id}
            color={label.color}
            name={label.name}
            onClick={() => this.toggleLabels(label)}/>
        )}
      </LGListings>
    </LGContainer>
  }
}

export default connect(state => ({}), { setActiveLabels })(LabelGroup)
