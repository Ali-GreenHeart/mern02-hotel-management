import { userModel } from '../model.js'
import bcrypt from 'bcrypt'
import { Router } from 'express'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../utils.js'

const authRoute = new Router()

authRoute.post('/signup', async (req, res) => {
    const password = await bcrypt.hash(req.body.password, 10)
    await userModel.create({
        username: req.body.username,
        password: password
    })
    return res.send("user yaradildi..")
})


authRoute.post('/signin', async (req, res) => {
    const { username, password } = req.body
    const user = await userModel.findOne({ username })
    if (!user) {
        return res.status(404).send('user not found')
    }
    const passwordAreSame = await bcrypt.compare(password, user.password)
    if (!passwordAreSame) {
        return res.status(401).send('password is wrong!')
    }
    const token = jwt.sign({ username: user.username, role: user.role }, JWT_SECRET)

    return res.status(200).send(token)
})


export default authRoute;
