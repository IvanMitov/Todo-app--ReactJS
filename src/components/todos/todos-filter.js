import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from 'store/actions/todos'
import { VisibilityFilters } from 'store/constants/types'

function TodosFilter({setVisibilityFilter}) {
    const [filter, setFilter] = useState(VisibilityFilters.SHOW_ALL)

    const handleChange = (e) => {
        setFilter(e.target.value)
        setVisibilityFilter(e.target.value)
    }

    return (
        <div className="todos__filter">
            <span className="todos__filter-title">Show:</span>
            <select value={filter} onChange={handleChange}>
                <option value={VisibilityFilters.SHOW_ALL}>All</option>
                <option value={VisibilityFilters.SHOW_ACTIVE}>Active</option>
                <option value={VisibilityFilters.SHOW_COMPLETED}>Completed</option>
            </select>
        </div>
    )

}

export default connect(null, {setVisibilityFilter})(TodosFilter)