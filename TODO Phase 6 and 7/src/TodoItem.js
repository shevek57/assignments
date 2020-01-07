import React from "react"

function TodoItem({item, checkClicked}) {
    const checkedStyle = {color: "grey", textDecoration: "line-through"}
    return (
        <div className="todo-item">
            <form>
            <input type="checkbox" 
                    checked={item.completed} 
                    onChange={ checkClicked } />
            <p style={item.completed ? checkedStyle: null}>{item.text}</p> {/* for some reason, "item.completed && checkedStyle does not work" */}
            </form>
        </div>
    )
}

export default TodoItem