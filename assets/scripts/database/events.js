'use strict'

const userApi = require('./api.js')
const userUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateAccount = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('passing through event js')
  console.log(data)
  userApi.create(data)
    .then(userUi.onCreateSuccess)
    .catch(userUi.onError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.signIn(data)
    .then(userUi.onSignInSuccess)
    .catch(userUi.onSignInError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.changePassword(data)
    .then(userUi.onChangePasswordSuccess)
    .catch(userUi.onChangePasswordError)
}

const onSignOut = function (event) {
  event.preventDefault()
  userApi.signOut()
    .then(userUi.onSignOutSuccess)
    .catch(userUi.onSignOutError)
}

const onGetAllProducts = function (event) {
  console.log('passing through events.js')
  event.preventDefault()
  const data = getFormFields(this)
  userApi.getAllProducts(data)
    .then(userUi.onGetAllProductsSuccess)
    .catch(userUi.onGetAllProductsError)
}

const onUpdateProduct = function (event) {
  console.log('passing through update events.js')
  event.preventDefault()
  const data = getFormFields(event.target)
  // may need to update name of create after html is created
  userApi.updateProduct(data)
    .then(userUi.onUpdateProductSuccess)
    .catch(userUi.onUpdateProductFail)
}

module.exports = {
  onCreateAccount,
  onSignIn,
  onChangePassword,
  onSignOut,
  onGetAllProducts,
  onUpdateProduct
}
