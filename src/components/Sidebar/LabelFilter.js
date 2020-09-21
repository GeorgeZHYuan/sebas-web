import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Label from './Label'
import { setActiveLabels } from 'store/actions/labelActions'

const LFContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`
const LFTitle = styled.h3`
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
`
const LFListings = styled.div`
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

class LabelFilter extends React.Component {
  removeLabels(label) {
    this.props.setActiveLabels(label)
  }

  render() {
    return <LFContainer>
      <LFTitle>Filters</LFTitle>
      <LFListings>
        {this.props.filters.map((label) =>
          <Label
            key={label._id}
            color={label.color}
            name={label.name}
            onClick={() => this.removeLabels(label)}/>
        )}
      </LFListings>
    </LFContainer>
  }
}

const mapStateToProps = (state) => ({
  filters: state.labels.active
})

export default connect(mapStateToProps, { setActiveLabels })(LabelFilter)
