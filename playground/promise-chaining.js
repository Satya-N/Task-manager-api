require('../src/db/mongoose')
const User = require('../src/models/user')

//600cec639319f9ad911a5c78

// User.findByIdAndUpdate('600ceec5963692b0a170fbed', { age: 20 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 20 })

// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeandCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeandCount('600cec639319f9ad911a5c78', 21).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})