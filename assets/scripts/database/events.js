'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetAllProducts = function (event) {
  console.log('passing through events.js')
  event.preventDefault()
  const data = getFormFields(this)
  api.getAllProducts(data)
    .then(ui.onGetAllProductsSuccess)
    .catch(ui.onGetAllProductsError)
}

module.exports = {
  onGetAllProducts
}
