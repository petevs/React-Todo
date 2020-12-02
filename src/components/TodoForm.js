import React from 'react'

class TodoForm extends React.Component {

    constructor(props) {
        super();
        this.state = {
            newTodo: ""
        }
    }

    handleChanges = (e) => {
        this.setState({
            ...this.state,
            newTodo: e.target.value
        })
    }

    submitTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(e, this.state.newTodo)
        this.setState({ newTodo: "" })
    }

    render(props) {
        return (
            <form 
                className='todoForm'
                onSubmit={this.submitTodo}
            >
                <input 
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                    type="text"
                    name="todo"
                    placeholder="Add a Todo"
                />
                <button>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        )
    }

}

export default TodoForm