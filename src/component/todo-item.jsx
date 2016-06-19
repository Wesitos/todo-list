import React from 'react';

const TodoItem = React.createClass({
  getInitialState: function(){
    return {
      done: false,
    };
  },
  render: function(){
    const {text} = this.props;
    const {done} = this.state;
    return(
      <li>
        <span>
          {text}
        </span>
        <button onClick={()=> this.setState({done: !done})}>
          {done?"hecho":"falta"}
        </button>
      </li>
    );
  },
});

export default TodoItem;
