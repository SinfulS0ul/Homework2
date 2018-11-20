import React, { Component } from 'react';
import './ToDoList.css';

class ToDoList extends Component {

  componentDidMount() {
    this.props.textInput.current.focus();
  }
  
  componentDidUpdate() {
    this.props.textInput.current.focus();
  }

  render() {
    return(
      <div>
        <form className="d-flex flex-column align-items-center bg-light" onSubmit={this.props.addTask}>
          <input 
            autoComplete="off"
            className="w-100"
            name="taskText"
            placeholder="Введіть задачу" 
            ref={this.props.textInput}
            onChange={this.props.handleInputChange}
          />
          <button 
            type="submit" 
            className="w-100 btn btn-success"
          > Додати </button>
          <div
            className="d-flex flex-row"
          >
          <div
           className="d-flex flex-column p-2 flex-fill"
          >
          <label>Виконані задачі<input 
            name="doneTasks"
            type="checkbox" 
            onChange={this.props.handleInputChange}
          /></label>
          <label>Невиконані задачі<input 
            name="undoneTasks"
            type="checkbox" 
            onChange={this.props.handleInputChange}
          /></label>
          </div>
          <div
           className="d-flex flex-column p-2 flex-fill"
          >
          <label>Пріорітет за останньою<input 
            name="sortByDate"
            type="radio" 
            value="byLastDate"
            onChange={this.props.handleInputChange}
            checked={this.props.sortByDate === 'byLastDate'}
          /></label>
          <label>Пріорітет за першою<input 
            name="sortByDate"
            type="radio" 
            value="byFirstDate"
            onChange={this.props.handleInputChange}
            checked={this.props.sortByDate === 'byFirstDate'}
          /></label>
          </div>
          </div>
        </form>
      </div>
    )
  }
}

export default ToDoList