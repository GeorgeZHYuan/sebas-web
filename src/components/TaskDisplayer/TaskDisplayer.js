import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import TaskCard from './TaskCard'
import { setTasks } from 'store/actions/taskActions'

const TDContainer = styled.div`
  height: 100%;
  padding: 25px;
`

class TaskDisplayer extends React.Component {
  componentDidMount() {
    this.props.setTasks()
  }

  render() {
    const tasks = this.props.tasks

    return <TDContainer>
      {tasks.length !== 0 && tasks.map((task, id)=> {
        return <TaskCard
          key={id}
          name={task.name}
        />
      })}
    </TDContainer>
  }
}


const mapStateToProps = (state) => ({
  tasks: state.tasks.available,
})

export default connect(mapStateToProps, {setTasks})(TaskDisplayer)
