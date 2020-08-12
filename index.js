const controller = require('./controller')
const express = require('express')
const bodyParser = require('body-parser')
// const { response } = require('express')
const app = express()
const port = 3001

app.use(bodyParser.json())
app.use( bodyParser.urlencoded({ extended: true,}))


app.get('/',controller.home)
app.get('/users',controller.getUsers)
app.get('/users/:id', controller.getUserById)
app.get('/user/search',controller.getUserByName)
app.post('/user/create',controller.createUser)
app.put('/user/update/:id',controller.updateUser)
app.delete('/user/delete/:id',controller.deleteUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

