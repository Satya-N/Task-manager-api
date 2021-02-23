const express = require('express')
const mongoose = require('mongoose')
require('./db/mongoose')
const { Router } = require('express')
const userRouter = require('./routers/user-router')
const taskRouter = require('./routers/tasks-router')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET Request are Disable')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Server is in Maintenanace Mode')
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on ' + port)
})

// const pet = {
//     name: 'Harry'
// }

// pet.toJSON = function() {
//     return {}
// }

// console.log(JSON.stringify(pet))

// const jwt = require('jsonwebtoken')

// const myfunc = async() => {
//     const token = jwt.sign({ _id: 'abc123' }, 'Assassins@1999', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'Assassins@1999')
//     console.log(data)
// }
// myfunc()


const Task = require('./models/task')
const User = require('./models/user')

const main = async() => {
    // const task = await Task.findById('6026a64b5923b00189bf6339')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)
    // const user = await User.findById('6026a4ae42dc6f8ff82e52b5')
    // await user.populate('usertasks').execPopulate()
    // console.log(user.usertasks)
}

main()