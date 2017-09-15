'use strict'

const onCreateSuccess = function() {
  console.log('You successfully created an account')
}

const onError = function(response) {
  console.error(response)
}

module.exports = {
  onCreateSuccess,
  onError
}
