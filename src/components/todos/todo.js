import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({text, completed, onToggle, onDelete}) => (
    <li className="todos__todo-wrapper">
        <label style={{ textDecoration: completed ? 'line-through' : 'none' }} >
            <input onChange={onToggle} type="checkbox" checked={completed ? true : ''} />
            <span className="todo__checkmark"></span>
            {text}
        </label>
        <button type="button" className="todo__delete" onClick={onDelete}>&times;</button>
    </li>
)

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Todo