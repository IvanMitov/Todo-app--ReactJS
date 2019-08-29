import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from 'store/actions/todos'

function TodosAdd({addTodo}) { 
    let todo = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo.current.value.trim()) {
            return
        }
        addTodo(todo.current.value)
        todo.current.value = ''
    }

    return (
        <div className="todos__add">
            <form onSubmit={handleSubmit}>
                <input name="todo" type="text" ref={todo} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

TodosAdd.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default connect(null, {addTodo})(TodosAdd)