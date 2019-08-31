import { createSelector } from 'reselect'
import { VisibilityFilters } from '../constants/types'

const getVisibleTodos = createSelector(
    state => state.filters.selected,
    state => state.todos.todos,
    (filter, todos) => {
        switch (filter) {
            case VisibilityFilters.SHOW_ALL:
                return todos
            case VisibilityFilters.SHOW_COMPLETED:
                return todos.filter(todo => todo.completed)
            case VisibilityFilters.SHOW_ACTIVE:
                return todos.filter(todo => !todo.completed)
            default:
                throw new Error(`Unknown filter: ${filter}`)
        }
    }
)

export default getVisibleTodos