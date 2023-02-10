const ScooterApp = require('ScooterApp')

class User {
  constructor(usernme, password, age){
      this.usernme = usernme
      this.password = password
      this.age = age
      this.loggedIn = false
    }

login(input){
  if(input === password){
    loggedIn = true
  } else {
    throw new Error ("incorrect password")
  }
}

logout(){
  loggedIn = false
}


}

module.exports = User


