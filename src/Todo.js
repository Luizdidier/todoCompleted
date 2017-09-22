import React, { Component } from 'react';
import TodoTableList from './TodoTableList'

const Task = []

class Todo extends Component {
  constructor(props) {
    super(props);


    this.state = {
      tasks:[{
        taskName: 'Lauch',
        isCompleted: true,
        isEditing: false
      }]
    };
    this.handle = this.handle.bind(this); //es5
  }

  handle(list){
    this.setState({tasks: list});
  }

  handleCreate(event) {
    event.preventDefault();

    const taskName = this.refs.createInput.value;

    const newTask = {taskName:taskName, isCompleted:false, isEditing:false};

    this.setState({tasks:[...this.state.tasks || [], newTask]})

    this.refs.createInput.value = '';
  }

  handleAlter(event, object){
    event.preventDefault();
    this.setState({tasks:[...this.state.tasks || [], object]})

  }

  render() {

    return (
      <center>
      <div>
      <form onSubmit={this.handleCreate.bind(this)}>
      <br/>
      <input type='text' ref='createInput'></input>
      <button style={{marginLeft:'0.2%'}} >Ok.</button>
      </form>
      <TodoTableList tasks={this.state.tasks} action={this.handle} action1={this.handleAlter}/>
      </div>
      </center>

    );
  }
}

export default Todo;
