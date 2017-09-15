'use strict'

const app = require("../store.js")
const onCreateSuccess = function() {
  console.log('You successfully created an account')
}

const onError = function(response) {
  console.error(response)
}

const onSignInSuccess = function(data) {
  console.log('You successfully sign in')
  app.user = data.user
}

const onSignOutError = function(response) {
  console.error(response)
}

const onChangePasswordSuccess = function() {
  console.log('You succesfully change your password')
}

const onChangePasswordError = function(response) {
  console.log(response)
}
module.exports = {
  onCreateSuccess,
  onError,
  onSignInSuccess,
  onSignOutError,
  onChangePasswordSuccess,
  onChangePasswordError

}
