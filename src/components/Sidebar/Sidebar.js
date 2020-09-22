import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import colors from 'styles'

import LabelGroup from './LabelGroup'
import LabelFilter from './LabelFilter'

import { getLabelGroups } from 'store/actions/labelActions'

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
    this.props.getLabelGroups()
  }

  render() {    
    return (
      <SidebarContainer>
        {this.props.filters.length > 0 && <LabelFilter/>}
        {this.props.groups.map(group =>
          <LabelGroup
            key={group._id}
            sectionTitle={group.name}
            labels={group.labels}/>
        )}
      </SidebarContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  groups: state.labels.groups,
  filters: state.labels.active
})

export default connect(mapStateToProps, { getLabelGroups })(Sidebar)
