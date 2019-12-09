import React from "react"

function TodoItem({item, checkClicked}) {
    return (
        <div className="todo-item">
            <form>
            <input type="checkbox" 
                    defaultChecked={item.completed} 
                    onChange={() => checkClicked({...item, completed: !item.completed})} />
            <p>{item.text}</p>
            </form>
        </div>
    )
}

export default TodoItem