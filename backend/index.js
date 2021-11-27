const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const app = express();

const { login } = require('./query')

app.use(express.json({}));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const auth = login(username, password)
  return auth
})

app.post('/survey', (req, res) => {
  console.log(req.body)
  const { interests, degree, workHours, profile } = req.body
  console.log(interests)
  console.log(workHours)
  res.status(200).json({mock:"meu ovo"})
})


app.listen(3000, ()=>{
  console.log("O app está rodando na porta 3000!")
})