import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { CustomInput } from 'reactstrap';
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
          <Button
            type="submit" 
            className="w-100"
            bsStyle="success"
          > Додати </Button>
          <div
            className="d-flex flex-row"
          >
          <div
           className="d-flex flex-column p-2 flex-fill"
          >
          <CustomInput 
            name="doneTasks"
            type="checkbox" 
            id="exampleCustomCheckbox1" 
            label="Виконані задачі" 
            onChange={this.props.handleInputChange}
          />
          <CustomInput 
            name="undoneTasks"
            type="checkbox" 
            id="exampleCustomCheckbox2" 
            label="Невиконані задачі" 
            onChange={this.props.handleInputChange}
          />
          </div>
          <div
           className="d-flex flex-column p-2 flex-fill"
          >
          <CustomInput 
            name="sortByDate"
            value="byLastDate"
            onChange={this.props.handleInputChange}
            checked={this.props.sortByDate === 'byLastDate'}
            type="radio" 
            id="exampleCustomRadio1" 
            label="Пріорітет за останньою" 
          />
          <CustomInput 
            name="sortByDate"
            value="byFirstDate"
            onChange={this.props.handleInputChange}
            checked={this.props.sortByDate === 'byFirstDate'}
            type="radio" 
            id="exampleCustomRadio2" 
            label="Пріорітет за першою" 
          />
          </div>
          </div>
        </form>
      </div>
    )
  }
}

export default ToDoList