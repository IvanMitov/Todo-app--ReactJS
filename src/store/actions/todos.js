import axios from 'axios'

const apiUrl = 'http://localhost:3000'

export const fetchTodos = () => {
  return dispatch => {
    return axios.get(`${apiUrl}/todos`)
      .then(response => {
        dispatch(fetchTodosSuccess(response.data))
      })
      .catch(error => {
        throw (error)
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export const fetchTodosSuccess = todos => ({
  type: 'FETCH_TODOS',
  todos
})

export const addTodo = text => {
  if (!text) {
    return
  }

  return dispatch => {
    const todo = {
      id: randomId(),
      text,
      completed: false
    }

    return axios.post(`${apiUrl}/todos`, todo)
      .then(response => {
        dispatch(addTodoSuccess(response.data))
      })
      .catch(error => {
        throw (error)
      })
  }
}

export const addTodoSuccess = data => ({
  type: 'ADD_TODO',
  todo: {
    ...data
  }
})

export const deleteTodo = id => {
  return dispatch => {
    return axios.delete(`${apiUrl}/todos/${id}`)
      .then(() => {
        dispatch(deleteTodoSuccess(id))
      })
      .catch(error => {
        throw (error)
      })
  }
}

export const deleteTodoSuccess = id => ({
  type: 'DELETE_TODO',
  id
})

export const toggleTodo = todo => {
  return dispatch => {
    const updatedTodo = {
      ...todo,
      completed: !todo.completed
    }

    return axios.put(`${apiUrl}/todos/${todo.id}`, updatedTodo)
      .then(response => {
        dispatch(toggleTodoSuccess(response.data.id))
      })
      .catch(error => {
        throw (error)
      })
  }
}

export const toggleTodoSuccess = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const editTodo = (todo, val) => {
  return dispatch => {
    const updatedTodo = {
      ...todo,
      text: val
    }

    return axios.put(`${apiUrl}/todos/${todo.id}`, updatedTodo)
      .then(response => {
        dispatch(editTodoSuccess(response.data))
      })
      .catch(error => {
        throw (error)
      })
  }
}

export const editTodoSuccess = data => ({
  type: 'EDIT_TODO',
  todo: data
})

export const setLoading = isLoading => ({
  type: 'SET_LOADING',
  isLoading
})

function randomId() {
  return Math.floor(Math.random() * 1000000) + 1
}
