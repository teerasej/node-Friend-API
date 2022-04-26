
import express from 'express'
import User from '../models/users'
import passport from 'passport'
import jwt from 'jwt-simple'
import { jwtSecret } from '../config/jwt'

const router = express.Router()

router.post('/users/register', async (req, res) => {
    const newUser = req.body
    const result = await User.register(new User(newUser), newUser.password)
    res.json(result)
})

router.post('/users/signin', passport.authenticate('local'), async (req, res) => {
    const signinInUser = req.body

    try {
        const userExist = await User.findOne({ username: signinInUser.username })

        const payload = {
            id: userExist._id,
            expire: Date.now() + 1000 * 60 * 60 * 24 * 7, //7 days
        }
        const token = jwt.encode(payload, jwtSecret)
        res.json({
            token: token
        })


    } catch (error) {
        res.json(error).status(500)
    }
})


export default router