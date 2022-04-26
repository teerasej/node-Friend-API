
import express from 'express'
import User from '../models/users'
const router = express.Router()

router.post('/users/register', async (req, res) => {
    const newUser = req.body
    const result = await User.register(new User(newUser), newUser.password)
    res.json(result)
}) 

router.post('/users/signin', (req, res) => {
    const signinInUser = req.body
    res.json(signinInUser) 
})


export default router