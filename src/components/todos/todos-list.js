import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Todo from './todo'
import { fetchTodos, toggleTodo, deleteTodo, editTodo } from 'store/actions/todos'
import getVisibleTodos from 'store/selectors'

function TodosList({ todos, loading, fetchTodos, toggleTodo, deleteTodo, editTodo }) {

    useEffect(() => {
        fetchTodos()
    }, [fetchTodos])

    return (
        <div className="todos__list">
            {todos.length ?
                <ul>
                    {todos.slice(0).reverse().map(todo =>
                        <Todo
                            key={todo.id}
                            {...todo}
                            onToggle={() => toggleTodo(todo)}
                            onDelete={() => deleteTodo(todo.id)}
                            onEdit={(val) => editTodo(todo, val)}
                        />
                    )}
                </ul>
                : ( loading 
                    ? <div className="loader">Loading...</div>
                    : <div className="todos__list-empty">No items</div>
                )
            }
        </div>
    )
}

const mapState = state => {
    const { loading } = state.todos

    return {
        todos: getVisibleTodos(state),
        loading
    }
}

TodosList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    loading: PropTypes.bool.isRequired,
    fetchTodos: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired
}

export default connect(mapState, { fetchTodos, toggleTodo, deleteTodo, editTodo })(TodosList)