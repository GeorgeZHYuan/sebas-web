import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import colors from 'styles'

import LabelListing from './LabelListing'
import { getLabels } from 'store/actions/labelActions'

const LabelMenuContainer = styled.div`
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

class LabelMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      labels: []
    }
  }

  componentDidMount() {
    this.props.getLabels()
  }

  render () {
    const labels = this.props.labels

    return (
      <LabelMenuContainer>
        {labels.length > 0 && labels.map((item) => {
          return <LabelListing
            key={item._id}
            sectionTitle={item.name}
            labels={item.labels}
          />
        })}
      </LabelMenuContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  labels: state.labels.available
})

export default connect(mapStateToProps, { getLabels })(LabelMenu)
