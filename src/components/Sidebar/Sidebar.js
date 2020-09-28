import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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

const Sidebar = ({
  filters,
  groups,
  getLabelGroups
}) => {
  useEffect(() => {
    getLabelGroups()
  }, [getLabelGroups])

  return <SidebarContainer>
    {filters.length > 0 && <LabelFilter/>}
    {groups.map(group =>
      <LabelGroup
        key={group._id}
        sectionTitle={group.name}
        labels={group.labels}
      />
    )}
  </SidebarContainer>
}

Sidebar.propTypes = {
  filters: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
  setActiveLabels: PropTypes.func
};

const mapStateToProps = (state) => ({
  groups: state.labels.groups,
  filters: state.labels.active
})

export default connect(
  mapStateToProps,
  { getLabelGroups }
)(Sidebar)
