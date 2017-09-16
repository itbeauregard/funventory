'use strict'

const productApi = require('./api.js')
const productUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateProduct = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('passing through products event js')
  console.log(data)
  // may need to update name of create after html is created
  productApi.createProduct(data)
    .then(productUi.onCreateProductSuccess)
    .catch(productUi.onCreateProductFail)
}

const onUpdateProduct = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
    // may need to update name of create after html is created
  productApi.updateProduct(data)
    .then(productUi.onUpdateProductSuccess)
    .catch(productUi.onUpdateProductFail)
}

module.exports = {
  onCreateCreateProduct,
  onUpdateProduct,
}
