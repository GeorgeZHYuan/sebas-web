import React from 'react'
import styled from 'styled-components'

import colors from 'styles'

import LabelListing from './LabelListing'

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

const data1 = {
  sectionTitle: "test title 1",
  labels: [
    {
      title: 'test label 1',
      color: colors.blue
    },
    {
      title: 'test label 2',
      color: colors.red
    },
    {
      title: 'test label 3',
      color: colors.green
    },
  ]
}

const data2 = {
  sectionTitle: "test title 2",
  labels: []
}

const data3 = {
  sectionTitle: "test title 3",
  labels: [
      {
      title: 'test label 1',
      color: colors.blue
    },
    {
      title: 'test label 2',
      color: colors.red
    },
    {
      title: 'test label 3',
      color: colors.green
    }
  ]
}


class LabelMenu extends React.Component {
  render () {
    return (
      <LabelMenuContainer>
        <LabelListing
          sectionTitle={data1.sectionTitle}
          labels={data1.labels}
        />
        <LabelListing
          sectionTitle={data2.sectionTitle}
          labels={data2.labels}
        />
        <LabelListing
          sectionTitle={data3.sectionTitle}
          labels={data3.labels}
        />
      </LabelMenuContainer>
    )
  }
}

export default LabelMenu
