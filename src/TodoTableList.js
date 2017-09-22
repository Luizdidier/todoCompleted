import React, { Component } from 'react';
import TodoTable from './TodoTable';

/*function delete(i){
var it = i.task;
return i.task != it;
}*/
let aCor = '';
class TodoTableList extends Component {

  deleteTask(item){
    //  console.log(this.props.tasks.map(m => m.taskName))
    const list = this.props.tasks.filter( task => item.taskName !== task.taskName);
    this.props.action(list);
  }

  alterColor(isCompleted){
    //console.log(isCompleted);
    aCor = isCompleted ? "green" : "red";
    return aCor;
  }

  alterAtribute(item, isCompleted){
    const find = this.props.tasks.filter( task => item.taskName === task.taskName);
    this.deleteTask(find);
    const alter = isCompleted === false ? find.map(m => m.isCompleted = true): find.map(m => m.isCompleted = false);
    this.props.action1.bind(this, find);
  }

  saveTask(task, itemEdit){
    const find = this.props.tasks.filter( t => task.taskName === t.taskName);
    this.deleteTask(find);
    const tasks = find.map(i => i.taskName = this.refs.editValue.value);
    this.props.action1.bind(this, find);
    this.alterEditing(task, itemEdit);
  }

  alterEditing(item, itemEdit){
    const find = this.props.tasks.filter (t => item.taskName === t.taskName);
    this.deleteTask(find);
    const alter = itemEdit === false ? find.map(m => m.isEditing = true): find.map(m => m.isEditing = false);
    this.props.action1.bind(this, find)

  }

  editTask(item, itemTask){
      if (item.isEditing) {
        return(
          <span>
          <input type='text' defaultValue={itemTask} ref='editValue'></input>
          <button onClick={() => this.alterEditing(item, item.isEditing)} >Cancel</button>
          <button onClick={() => this.saveTask(item, item.isEditing)}>Save</button>
          </span>
        );
      }

      return(
        <span>
        <span onClick={() => this.alterAtribute(item, item.isCompleted)}>{item.taskName}</span>
        <button onClick={() => this.deleteTask(item)}>Delete</button>
        <button onClick={() => this.alterEditing(item, item.isEditing)} > Edit </button>
        </span>
      );

  }



  render() {

    return (
      <table>
      <TodoTable/>
      <tbody>
      {this.props.tasks.map((item, key) =>
        <div>
        <tr key={key} style={{color:this.alterColor(item.isCompleted)}} >
        <td>{this.editTask(item, item.taskName)}</td>
        </tr>
        </div>
      )}
      </tbody>
      </table>
    );

  }
}


export default TodoTableList;
