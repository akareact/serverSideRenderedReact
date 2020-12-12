import express from 'express'
import {readFileSync} from 'fs'
import App from '../client/App.js'
import {renderToString} from 'react-dom/server'
import React from 'react'
import {addtodo} from '../shared/shared'

const app = new express()

app.use(express.static("dist"))

let data = {
    todo : [{
        
        todo : "this is first todo",
        completed : false
    },
    {
        
        todo : "this is second todo",
        completed : false
    },
    {
        
        todo : "this is third todo",
        completed : false
    },
    {
        
        todo : "this is fourth todo",
        completed : false
    }
]
}

app.get('/addtodo/:todo', (req, res) => {
    const {query, params} = req;
    data = addtodo(data, params.todo)
    res.send("ok")
})

app.get('/data', (req, res) => {
    res.json(data)
})
app.get("/", (req,res) => {
    const index = readFileSync("public/index.html", "utf8")
    const rendered = renderToString(<App todo = {data.todo}/>)
    res.send(index.replace("{{rendered}}", rendered))
})

app.listen(3000, console.log("server is up"))