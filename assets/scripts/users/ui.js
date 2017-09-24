'use strict'

const app = require('../store.js')
const ux = require('./ux.js')

const onCreateSuccess = function () {
  console.log('You successfully created an account')
}

const onError = function (response) {
  console.error(response)
}

const onSignInSuccess = function (data) {
  ux.signIn()
  console.log('You successfully pooped')
  app.user = data.user
}

const onSignInError = function (response) {
  $(() => $('#sign-in-error').show())
}

const onChangePasswordSuccess = function () {
  console.log('You succesfully change your password')
  ux.changePasswordSuccess()
}

const onChangePasswordError = function (response) {
  $(() => $('#password-change-error').show())
}

const onSignOutSuccess = function () {
  console.log('You successfully sign out')
  app.user = null
  ux.signOut()
}

const onSignOutError = function (response) {
  console.log(response)
}

module.exports = {
  onCreateSuccess,
  onError,
  onSignInSuccess,
  onSignInError,
  onChangePasswordSuccess,
  onChangePasswordError,
  onSignOutSuccess,
  onSignOutError
}
