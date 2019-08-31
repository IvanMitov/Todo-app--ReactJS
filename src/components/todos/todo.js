import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'


function Todo({text, completed, onToggle, onDelete, onEdit}) { 
    const [isEdit, setEdit] = useState(false)
    const [todoVal, setTodoVal] = useState(text)

    const handleCancel = () => {
        setEdit(false)
        setTodoVal(text)
    }

    const handleEditSubmit = (e) => {
        e.preventDefault()
        const todoValTrim = todoVal.trim();
        if (!todoValTrim) {
            return
        }
        onEdit(todoValTrim)
        setEdit(false)
    }

    return (
        <li className="todo">
            { !isEdit ? 
                <Fragment>
                    <label style={{ textDecoration: completed ? 'line-through' : 'none' }} >
                        <input type="checkbox" checked={completed ? true : ''} onChange={onToggle} />
                        <span className="todo__checkmark"></span>
                        {text}
                    </label>
                    <div className="todo__controls">
                        <button type="button" className="todo__controls-edit" onClick={() => setEdit(true)}>Edit</button>
                        <button type="button" className="todo__controls-delete" onClick={onDelete}>&times;</button>
                    </div>
                </Fragment>
                : 
                <form onSubmit={handleEditSubmit}>
                    <input type="text" value={todoVal} className="todo__new-name" onChange={e => setTodoVal(e.target.value)} />
                    <div className="todo__controls">
                        <button type="button" className="todo__controls-cancel" onClick={handleCancel}>Cancel</button>
                        <button type="submit" className="todo__controls-save">Save</button>
                    </div>
                </form>
            }
        </li>
    )
}

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
}

export default Todo