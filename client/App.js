import React, {useState} from 'react'



const App = ({todo, addtodo}) => {
    const [inputstate , changestate] = useState("")

    const handleUserInput = (event => {
        event.preventDefault()
        changestate(event.target.value)
        
    })
    
    const submittodo =() => {
        addtodo(inputstate)
    }
    return (
        <div><h1>TODO APP under construction</h1>

        <div id="input"><input type="text" onChange= {handleUserInput}/><button onClick={submittodo}>ADD</button></div>

        
        {todo.map(t => {
            
            return (
            <div>{t.todoid}--{t.todo}</div>
            )
        })}
        
        </div>
    )
}

export default App;