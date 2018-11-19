import React, { Component } from 'react';

class ToDoList extends Component {

  componentDidMount() {
    this.props.textInput.current.focus();
  }
  
  componentDidUpdate() {
    this.props.textInput.current.focus();
  }

  render() {
    return(
      <div className="todo-list">
        <form onSubmit={this.props.addTask}>
          <input 
            name="taskText"
            placeholder="task-text" 
            ref={this.props.textInput}
            onChange={this.props.handleInputChange}
          />
          <input 
            name="doneTasks"
            type="checkbox" 
            onChange={this.props.handleInputChange}
          />
          <input 
            name="undoneTasks"
            type="checkbox" 
            onChange={this.props.handleInputChange}
          />
          <button type="submit"> Додати </button>
        </form>
      </div>
    )
  }
}

export default ToDoList