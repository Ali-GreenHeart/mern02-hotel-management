import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: String,
    password: String,
    role: String
})

const roomSchema = new Schema({
    number: String,
    rating: String,
    type: String,
    price: Number,
    personCount: Number
})

export const userModel = new model('user', userSchema)
export const roomModel = new model('room', roomSchema)


