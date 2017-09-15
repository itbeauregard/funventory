'use strict'

const onCreateSuccess = function() {
  console.log('You successfully created an account')
}

const onError = function(response) {
  console.error(response)
}

const onSignInSuccess = function() {
  console.log('You successfully sign in')
}

const onSignOutError = function(response) {
  console.error(response)
}

module.exports = {
  onCreateSuccess,
  onError,
  onSignInSuccess,
  onSignOutError
}
