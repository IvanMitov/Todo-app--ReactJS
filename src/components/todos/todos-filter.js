import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getFilters, setVisibilityFilter, getVisibilityFilter } from 'store/actions/filters'

function TodosFilter({filters, selected, getFilters, setVisibilityFilter, getVisibilityFilter}) {

    useEffect(() => {
        getFilters()
        getVisibilityFilter()
    }, [getFilters, getVisibilityFilter])

    return (
        <div className="todos__filter">
            <span className="todos__filter-title">Show:</span>
            <select value={selected} onChange={e => setVisibilityFilter(e.target.value)}>
                {filters.map(filter => 
                    <option key={filter.id} value={filter.name}>{filter.text}</option>
                )}
            </select>
        </div>
    )
}

const mapState = state => {
    const { filters, selected } = state.filters

    return { filters, selected }
}

TodosFilter.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    selected: PropTypes.string.isRequired,
    getFilters: PropTypes.func.isRequired,
    setVisibilityFilter: PropTypes.func.isRequired,
    getVisibilityFilter: PropTypes.func.isRequired
}

export default connect(mapState, {getFilters, setVisibilityFilter, getVisibilityFilter})(TodosFilter)