let initialState = {
    todos: []
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        text: action.text,
                        completed: false
                    }
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
        default:
            return state
    }
}

export default todos
