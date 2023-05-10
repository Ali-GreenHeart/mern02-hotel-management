import express from 'express'
import mongoose from 'mongoose'
import roomRouter from './routing/room.js'
import authRoute from './routing/auth.js'

const app = express()
app.use(express.json())
app.use("/", authRoute)
app.use("/room", roomRouter)

mongoose.connect('mongodb+srv://mern02:mern02@cluster0.otbbzte.mongodb.net/?retryWrites=true&w=majority')

app.listen(5000, () => {
    console.log('server is up.....')
})
