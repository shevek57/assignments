import React from "react"

function TodoItem({item}) {
    return (
        <div className="todo-item">
            <input type="checkbox" defaultChecked={item.completed} />
            <p>{item.text}</p>
        </div>
    )
}

export default TodoItem