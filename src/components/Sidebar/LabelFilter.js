import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Label from './Label'
import { setActiveLabels } from 'store/actions/labelActions'

const LFContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;
`

const LFTitle = styled.h3`
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
`

class LabelFilter extends React.Component {
  removeLabels(label) {
    this.props.setActiveLabels(label)
  }

  render() {
    const activeLabels = this.props.activeLabels

    return <LFContainer>
      <LFTitle>Active Labels</LFTitle>

      {activeLabels.keys().length > 0 && activeLabels.map((label) => {
        return <Label
          key={label._id}
          color={label.color}
          name={label.name}
          onClick={() => this.removeLabels(label)}/>
      })}
    </LFContainer>
  }
}

const mapStateToProps = (state) => ({
  activeLabels: state.labels.active
})

export default connect(mapStateToProps, { setActiveLabels })(LabelFilter)
