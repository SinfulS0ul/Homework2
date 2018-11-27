import React, { Component } from 'react';
import './App.css';
import './Datapicker.css';
import "react-datepicker/dist/react-datepicker.css";
import ToDoList from '../ToDoList'
import Tasks from '../Tasks';
import DatePicker from "react-datepicker";
 
class App extends Component {
  
  state = {
    tasks: [],
    taskText: { text: '', date: '', done: false },
    dateToDo: new Date(),
    highlightedDates: [],
    doneTasks: false,
    undoneTasks: false,
    sortByDate: 'byLastDate'
  }
  
  textInput = React.createRef();

  addTask = e => {
    e.preventDefault();
    const newTask = {text: this.state.taskText.text, date: this.state.taskText.date, done: this.state.taskText.done, dateToDo: this.state.dateToDo};
    const newDateToDo = this.state.dateToDo;
    if(newTask.text !== ''){
      this.setState({tasks: [...this.state.tasks, newTask],
                     taskText: {text: '', date: '', done: false},
                     highlightedDates: [...this.state.highlightedDates, newDateToDo]});
    }
  }

  deleteTask = key => {
    const newTasks = this.state.tasks
      .filter(task => task.date !== key);
    this.setState({tasks: newTasks});
  }

  handleInputChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox'? target.checked
                   : target.type === 'radio'? target.value 
                   : { text: target.value, date: Date.now(), done: false };
    const name = target.name;
    this.setState({
        [name]: value
    });
  }

  handleDateChange = date => {
    this.setState({dateToDo: date});
  }

  checkLikeDone = key => {
    const newTasks = this.state.tasks
      .map(task => task.date !== key? task : {text: task.text, date: task.date, done: !task.done, dateToDo: task.dateToDo});
    this.setState({tasks: newTasks});
  }

  render() {
    return (
      <div className="App">
        <DatePicker
          selected={this.state.dateToDo}
          onChange={this.handleDateChange}
          highlightDates={this.state.highlightedDates}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="time"
        />
        <ToDoList 
          addTask={this.addTask} 
          textInput={this.textInput}
          handleInputChange={this.handleInputChange}
          sortByDate={this.state.sortByDate}
        />
        <Tasks 
          entries={this.state.tasks} 
          doneTasks={this.state.doneTasks}
          undoneTasks={this.state.undoneTasks}
          sortByDate={this.state.sortByDate}
          deleteTask={this.deleteTask}
          checkLikeDone={this.checkLikeDone}
        />
      </div>
    );
  }
}

export default App;
