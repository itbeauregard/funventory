'use strict'

const signIn = function () {
  $(() => {
    $('.account-actions-holder').children().hide()
    $('.welcome').hide()

    $('.table-page').children().show()
    $('.sign-out-div').show()
  })
}

const signOut = function () {
  $(() => {
    $('.account-actions-holder').children().show()
    $('.welcome').show()

    $('.table-page').children().hide()
    $('.user-messages').children().hide()
    $('.sign-out-div').hide()
    $('#table-holder').empty()
  })
}

module.exports = {
  signIn,
  signOut
}
