import { VisibilityFilters } from '../constants/types'

let initialState = {
  filters: [],
  selected: VisibilityFilters.SHOW_ALL,
  loading: false
}

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FILTERS':
      return {
        ...state,
        filters: action.filters
      }
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        selected: action.filter
      }
    case 'GET_VISIBILITY_FILTER':
        return {
          ...state,
          selected: action.filter
        }
    default:
      return state
  }
}

export default visibilityFilter
