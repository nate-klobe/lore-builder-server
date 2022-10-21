const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const worldRouter = require('./routes/world.router')
const storyRouter = require('./routes/story.router')
const userRouter = require('./routes/user.router')

require('dotenv').config()

const app = express()

// middleware
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/worlds', worldRouter)
app.use('/stories', storyRouter)
app.use('/users', userRouter)

mongoose.connect(process.env.ATLAS_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port: ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log(err)
    })
