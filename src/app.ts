import express from 'express';
const app = express();
const port = 3000;

app.use(express.json())
app.use(express.static('public'))

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