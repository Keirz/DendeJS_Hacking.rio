const { User } = require('./database/models')

async function login(username, password){

}

async function teste(){
  return await User.findAll({})
}

module.exports = {
  login,
  teste
}