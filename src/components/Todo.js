import React from 'react'

const completed = (todo) => {
    if(todo.completed) {
        return 'completed'
    } else {
        return ''
    }
}

class Todo extends React.Component {
    render() {
        return (
            <div
                className={`todo ${completed(this.props.todo)}`}
                onClick={() => this.props.toggleTodo(this.props.todo.id)}
            >
                <p>{this.props.todo.task}</p>
            </div>
        )
    }
}

export default Todo