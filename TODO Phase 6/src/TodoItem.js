import React from "react"

function TodoItem({item, checkClicked}) {
    return (
        <div className="todo-item">
            <form>
            <input type="checkbox" 
                    checked={item.completed} 
                    onChange={ checkClicked } />
            <p>{item.text}</p>
            </form>
        </div>
    )
}

export default TodoItem