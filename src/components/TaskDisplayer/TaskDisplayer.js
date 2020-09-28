import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { connect } from 'react-redux'

import TaskCard from './TaskCard'
import { setTasks } from 'store/actions/taskActions'

const TDContainer = styled.div`
  height: 100%;
  padding: 25px;
`

const TaskDisplayer = ({
  filters,
  tasks,
  setTasks
}) => {
  useEffect(() => {
    setTasks(filters)
  }, [setTasks, filters])

  return <TDContainer>
    {tasks.map((task, id)=> {
      return <TaskCard
        key={id}
        name={task.name}
      />
    })}
  </TDContainer>
}

TaskDisplayer.propTypes = {
  filters: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.available,
  filters: state.labels.active
})

export default connect(
  mapStateToProps,
  { setTasks }
)(TaskDisplayer)
