import React from 'react'

export default function Todo(props) {

    const completed = (todo) => {
        if(todo.completed) {
            return 'completed'
        } else {
            return ''
        }
    }
    
    return (
        <div
            className={`todo ${completed(props.todo)}`} 
            onClick={() => props.toggleTodo(props.todo.id)}
        >
            <p>{props.todo.task}</p>
        </div>
    )
}
