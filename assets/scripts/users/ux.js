'use strict'

const signIn = function () {
  $(() => {
    console.log('in the beginning')
    $('.account-forms').children().hide()
    $('.table-page').children().show()
    console.log('in the end it doesnt even matter')
  })
}

module.exports = {
  signIn
}
