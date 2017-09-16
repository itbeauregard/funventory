'use strict'

const app = require('../store.js')

const onCreateProductSuccess = function () {
  console.log('You successfully created a product')

const onCreateProductFail = function () {
  console.error(error)
}

const onUpdateProductSuccess = function () {
  console.log('You edit it good!!!')
}

const onUpdateProductFail = function () {
  console.log('Your edit fails')
}

module.exports = {
  onCreateProductSuccess,
  onCreateProductFail,
  onUpdateProductSuccess,
  onUpdateProductFail
}
