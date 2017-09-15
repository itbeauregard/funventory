'use strict'

const app = require('../store.js')

const getAllProducts = function (data) {
  console.log('passing through api.js')
  return $.ajax({
    url: app.host + '/products/' + data.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  getAllProducts
}
