const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
const path = require('path')
const { login, teste } = require('./query')

app.use(express.json({}));
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs-locals'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
  res.render('example', {games: [{name:"AAA", description:"BBB"}]})
})
app.get('/pesquisa', (req, res)=>{
  res.render('survey', {games: [{name:"AAA", description:"BBB"}]})
})
app.get('/dashboard', (req, res)=>{
  res.render('dashboard', {games: [{name:"AAA", description:"BBB"}]})
})


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const auth = login(username, password)
  return auth
})

app.post('/teste', (req, res) => {
  const auth = teste()
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