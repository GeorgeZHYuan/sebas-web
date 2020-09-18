import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'

import Label from './Label'
import { setActiveLabels } from 'store/actions/labelActions'

const LSContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`
const LSTitle = styled.h3`
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
`

const LSListings = styled.div`
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

class LabelSelector extends React.Component {
  toggleSelections(id) {
    this.props.setActiveLabels(id)
  }

  render () {
    return <LSContainer>
      <LSTitle>{this.props.sectionTitle}</LSTitle>

      {this.props.labels.length !== 0 &&
        <LSListings>
          {this.props.labels.map((item, i) => {
            return <Label
              key={item._id}
              color={item.color}
              name={item.name}
              onClick={() => this.toggleSelection(item._id)}/>
          })}
        </LSListings>
      }

    </LSContainer>
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, { setActiveLabels })(LabelListing)
