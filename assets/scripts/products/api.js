'use strict'

const app = require('../store.js')

const createProduct = function (data) {
  console.log('passing through products api js')
  return $.ajax({
    url: app.host + '/products',
    method: 'POST',
    data
  })
}

const updateProduct = function (data) {
  console.log('passing through products stuff!!!')
  return $.ajax({
    url: app.host + '/products', + app.product._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

module.exports = {
  createProduct,
  updateProduct
}
