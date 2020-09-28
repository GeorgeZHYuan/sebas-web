import React from 'react';
import PropTypes from 'prop-types';
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

const LabelFilter = ({ filters, setActiveLabels }) => {
  return <LFContainer>
    <LFTitle>Filters</LFTitle>
    <LFListings>
      {filters.map((label) =>
        <Label
          key={label._id}
          color={label.color}
          name={label.name}
          onClick={() => setActiveLabels(label)}/>
      )}
    </LFListings>
  </LFContainer>
}

LabelFilter.propTypes = {
  filters: PropTypes.array.isRequired,
  setActiveLabels: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  filters: state.labels.active
})

export default connect(
  mapStateToProps,
  { setActiveLabels }
)(LabelFilter)
