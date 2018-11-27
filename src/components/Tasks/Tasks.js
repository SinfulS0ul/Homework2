import React, { Component } from 'react';
import './Tasks.css';

class Tasks extends Component{

  confirmTasks = task => {
      return (
        <li 
          className="d-flex flex-row"
          key={task.date}
        >
        <span
          className="w-100"
          onClick={ e => this.props.checkLikeDone(task.date)}
        >
        <button
          className="list-group-item list-group-item-action justify-content-between align-items-center btn"
        ><span
          className={task.done? 'done' : 'undone'}
        >{task.text} - {`${task.dateToDo.getMonth()}/${task.dateToDo.getDate()}/${task.dateToDo.getFullYear()} ${task.dateToDo.getHours()}:${task.dateToDo.getMinutes()}`}
        </span>
        </button>
        </span>
        <button 
          className="close"
          onClick={ e => this.props.deleteTask(task.date)}
        >x</button>
        </li>
    );
  }

  displayedTasks = (doneTasks, undoneTasks, arr) => {
    if(doneTasks && !undoneTasks){
      arr = arr.filter(task => task.done);
    }
    else if(!doneTasks && undoneTasks){
      arr = arr.filter(task => !task.done);
    }
    return arr;
  }

  sortByDate = (sortByDate, arr) => {
    if(sortByDate === 'byLastDate')
      arr = arr.sort((a, b) => b.date - a.date);
    else
      arr = arr.sort((a, b) => a.date - b.date);
    return arr;
  }

  render() {
    let entries = this.props.entries;
    const doneTasks = this.props.doneTasks;
    const undoneTasks = this.props.undoneTasks;
    const sortByDate = this.props.sortByDate;
    entries = this.displayedTasks(doneTasks, undoneTasks, entries)
    entries = this.sortByDate(sortByDate, entries);
    const taskList = entries.map(this.confirmTasks);
    return <ul className="list-group">{taskList}</ul>;
  }
}

export default Tasks