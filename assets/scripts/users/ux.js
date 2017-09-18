'use strict'

const signIn = function () {
  $(() => {
    $('.account-forms').children().hide()
    $('.table-page').children().show()
  })
}

module.exports = {
  signIn
}
