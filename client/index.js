import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {addtodo} from '../shared/shared'


let state = undefined

fetch("http://localhost:3000/data").then(data => data.json()).then(json => {
    state = json;
    console.log("got the state" ,state)
    render()
})


function addtodofinal(todo) {
  state = addtodo(state, todo)
  fetch(`/addtodo/${todo}`)
  render()
}


function render() {
    
    ReactDOM.hydrate(<App {...state} addtodo={addtodofinal}/>, document.querySelector("#root"))

}
