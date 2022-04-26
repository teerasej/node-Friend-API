import express from 'express';
import mongoose from 'mongoose'
import passportRouter from './config/passport'
import userRouter from './routes/users'
import passportJWT from './config/passport-jwt'

const jwt = passportJWT()

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/myapp');

app.use(express.json())
app.use(express.static('public'))
app.use(jwt.initialize())
app.use(passportRouter)
app.use(userRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/friends', (req, res) => {
    res.json({})
})

app.post('/friends', (req, res) => {
    const newFriend = req.body
    res.json(newFriend)
})

app.delete('/friends', (req, res) => {
    const deletingFriend = req.body
    res.json(deletingFriend)
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});