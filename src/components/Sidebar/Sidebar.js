import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import colors from 'styles'

import LabelListing from './LabelListing'
import {
  getLabels,
  getLabelGroups
} from 'store/actions/labelActions'

const SidebarContainer = styled.div`
  min-width: 150px;
  height: 100%;
  background-color: ${colors.themeBlue};

  & > div:nth-child(n) {
    margin-bottom: 50px;
  }

  & > div:first-child {
    margin-top: 20px;
  }
  & > div:last-child {
    margin-bottom: 0px;
  }
`

class Sidebar extends React.Component {
  componentDidMount() {
    this.props.getLabels()
    this.props.getLabelGroups()
  }

  render () {
    const groups = this.props.groups

    return (
      <SidebarContainer>
        {groups.length > 0 && groups.map(group => {
          return <LabelListing
            key={group._id}
            sectionTitle={group.name}
            labelIds={group.labels}
          />
        })}
      </SidebarContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  groups: state.labels.groups,
  activeLabels: state.labels.active
})

export default connect(
  mapStateToProps,
  { getLabelGroups, getLabels }
)(Sidebar)
