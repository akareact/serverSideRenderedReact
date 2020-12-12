export function addtodo(state, todo) {
    state.todo.push({todo : todo, completed : false})
    
    return state
      
  }