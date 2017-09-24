'use strict'

const signIn = function () {
  $(() => {
    $('.account-actions-holder').children().hide()
    $('.welcome').hide()
    $('.table-page').children().show()
  })
}

module.exports = {
  signIn
}
