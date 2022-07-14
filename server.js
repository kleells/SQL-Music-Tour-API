// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')


// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// const db = require('./models')
// db.sequelize.sync()

// // SEQUELIZE CONNECTION
// const sequelize = new Sequelize({
//     storage: process.env.PG_URI,
//     dialect: 'postgres',
//     username: 'postgres',
//     password: 'password'
//   })

//   // SEQUELIZE CONNECTION

// try {
//     sequelize.authenticate() 
//     console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
// } catch(err) {
//     console.log(`Unable to connect to PG: ${err}`) 
// }

  // CONTROLLERS 
  const bandsController = require('./controllers/bands_controller')
  app.use('/bands', bandsController)

console.log(new Date())
// ROOT
// app.get('/', (req, res) => {
//     res.status(200).json({
//         message: 'Welcome to the Tour API'
//     })
// })

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})