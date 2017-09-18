'use strict'

const app = require('../store.js')

const createProduct = function (data) {
  console.log('passing through products api js')
  return $.ajax({
    url: app.host + '/products',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const getAllProducts = function () {
  console.log('passing through getall api.js')
  return $.ajax({
    url: app.host + '/products',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getProduct = function () {
  return $.ajax({
    url: app.host + '/products/' + app.products._id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateProduct = function (data) {
  console.log('passing through products stuff!!!')
  return $.ajax({
    url: app.host + '/products/' + app.product._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const deleteProduct = function () {
  return $.ajax({
    url: app.host + '/products/' + app.product._id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct
}
