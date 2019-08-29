import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Todo from './todo'
import { toggleTodo, deleteTodo } from 'store/actions/todos'
import getVisibleTodos from 'store/selectors'

function TodosList({ todos, toggleTodo, deleteTodo }) {

    return (
        <div className="todos__list">
            {todos.length ? 
                (
                    <ul>
                        {todos.map(todo =>
                            <Todo
                                key={todo.id}
                                {...todo}
                                onToggle={() => toggleTodo(todo.id)}
                                onDelete={() => deleteTodo(todo.id)}
                            />
                        )}
                    </ul>
                ) : (
                    <div className="todos__list-empty">No items</div>
                )
            }
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        todos: getVisibleTodos(state) 
    }
}

TodosList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(TodosList)