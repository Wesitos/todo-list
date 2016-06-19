import React from 'react';
import TodoItem from './todo-item.jsx';

const TodoList = React.createClass({
  getInitialState: function(){
    const todos = ['Ir al banco', 'Alimentar a bola', 'Caminar'];
    return {
      todos,
      textValue: "",
    };
  },
  addTodo: function(todo){
    const todos = this.state.todos;
    this.setState({todos: todos.concat(todo)});
  },
  changeHandler: function(event){
    this.setState({textValue: event.target.value});
  },
  render: function(){
    const {todos, textValue} = this.state;
    const ComponentList = todos.map(
      (texto) => (<TodoItem text={texto}/>)
    );
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {ComponentList}
        </ul>
          <input
            onChange={this.changeHandler}
            type="text"
            value={textValue}/>
        <input type="submit" onClick={()=>this.addTodo(textValue)}/>
      </div>
    );
  },
});

export default TodoList;
