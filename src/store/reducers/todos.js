let initialState = {
    todos: [],
    loading: true
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TODOS':
            return {
                ...state,
                todos: action.todos
            }
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.todo
                ]
            }
        case 'TOGGLE_TODO':
            const todosWithToggled = state.todos.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
            return {
                ...state,
                todos: todosWithToggled
            }
        case 'DELETE_TODO':
            const todosExceptDeleted = state.todos.filter(todo =>
                todo.id !== parseInt(action.id)
            )
            return {
                ...state,
                todos: todosExceptDeleted
            }
        case 'EDIT_TODO':
            const todosWithEdited = state.todos.map(todo =>
                (todo.id === action.todo.id)
                    ? { ...todo, text: action.todo.text }
                    : todo
            )
            return {
                ...state,
                todos: todosWithEdited
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.isLoading
            }
        default:
            return state
    }
}

export default todos
