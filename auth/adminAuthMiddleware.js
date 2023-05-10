import { JWT_SECRET } from "../utils.js"
import jwt from 'jsonwebtoken'

function adminAuthMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
        return res.send('token yoxdur!')
    }
    jwt.verify(token, JWT_SECRET, async (err, data) => {
        if (err) {
            return res.send('token yanlisdir!')
        } else {
            if (data.role !== 'admin') {
                return res.status(403).send('admin deyilsen!')
            } else {
                next()
            }
        }
    })
}

export default adminAuthMiddleware;
