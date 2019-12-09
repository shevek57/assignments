/*
Create the ToDo app with:

 - a data file with list of ToDo items

 - array mapping to populate components

 - class component

 - state

 - handles events
 */

import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {items: todosData}
    this.handleTodoClick = this.handleTodoClick.bind(this)
  }

  handleTodoClick(todoItem) {
      this.setState(currState => 
        currState.items.map(item => 
          item.id===todoItem.id ? todoItem : item))
  }

  render() {
    const todos = this.state.items.map(item => 
              <TodoItem key={item.id} item={item} checkClicked={this.handleTodoClick}/>)
    return (
        <div className="todo-list">
         {todos}
        </div>
     )
  }
}

export default App;
