import { combineReducers } from 'redux'
import todos from './todos.js'
import filters from './filters.js'

export default combineReducers({
  todos,
  filters
})
