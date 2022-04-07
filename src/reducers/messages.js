const messages = (state = [], action) => {
    switch (action.type) {
      case 'ADD_MESSAGE':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,            
          }
        ]
      case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
  }
  
  export default messages
  