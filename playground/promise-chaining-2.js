require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndRemove('601289b13348ca4def129fd9').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((incompletetask) => {
//     console.log(incompletetask)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('600c6354ed6f2ae09de8d61b').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})