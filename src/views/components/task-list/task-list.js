import React, { Component } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import TaskItem from '../task-item/task-item';

import './task-list.css';
import Button from '../button';

class TaskList extends Component {
  static propTypes = {
    tasks: PropTypes.instanceOf(List).isRequired,
    selectTask: PropTypes.func.isRequired,
    selectedTaskId: PropTypes.string.isRequired,
    createTask: PropTypes.func.isRequired,
  };

  render() {
    const tasksNotLoadedYet = !this.props.tasks;
    let taskItems = null;
    if (tasksNotLoadedYet) {
      return (
        <div className='task-list-loader'>
        </div>
      );
    }

    taskItems = this.props.tasks.map((task, index) => {
      return (
        <TaskItem
          key={index}
          taskNumber={index}
          task={task}
          selectTask={this.props.selectTask}
          isActive={task.get("id") == this.props.selectedTaskId}
        />
      );
    });

    return (
      <div className='task-list-container'>
        <div className='task-list-header' name='task-list-header'>
          <Button
            className="button button-small add-task-button"
            onClick={this.props.createTask}>
            הוסף משימה
          </Button>
        </div>

        <div className='task-list'>
          {taskItems}
        </div>
      </div>
    );
  }
}

export default TaskList;
