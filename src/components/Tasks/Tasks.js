import React, { Component } from 'react';

class Tasks extends Component{

  confirmTasks = task => {
      return (
        <li 
        key={task.date}
        ><span
        onClick={ e => this.props.checkLikeDone(task.date)}
        >{task.text}</span>
        <button 
        onClick={ e => this.props.deleteTask(task.date)}
        >x</button>
        </li>
    );
  }

  render() {
    let entries = this.props.entries;
    const doneTasks = this.props.doneTasks;
    const undoneTasks = this.props.undoneTasks;
    if(doneTasks === true && undoneTasks === false)
      entries = entries.filter(task => task.done === false);
    else if(doneTasks === false && undoneTasks === true)
      entries = entries.filter(task => task.done === true);
    const taskList = entries.map(this.confirmTasks);
    return <ul className="task-list">{taskList}</ul>;
  }
}

export default Tasks