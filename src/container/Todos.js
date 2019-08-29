import React from 'react'
import TodosAdd from 'components/todos/todos-add'
import TodosFilter from 'components/todos/todos-filter'
import TodosList from 'components/todos/todos-list'

const Todos = () => (
    <div className="todos">
        <div className="todos__container container">
            <TodosAdd />
            <TodosFilter />
            <TodosList />
        </div>
    </div>
)

export default Todos
