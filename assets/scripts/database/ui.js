'use strict'

const app = require('../store.js')

const onCreateSuccess = function () {
  console.log('You successfully created an account')
}

const onError = function (response) {
  console.error(response)
}

const onSignInSuccess = function (data) {
  console.log('You successfully sign in')
  app.user = data.user
}

const onSignInError = function (response) {
  console.error(response)
}

const onChangePasswordSuccess = function () {
  console.log('You succesfully change your password')
}

const onChangePasswordError = function (response) {
  console.log(response)
}

const onSignOutSuccess = function () {
  console.log('You successfully sign out')
  app.user = null
}

const onSignOutError = function (response) {
  console.log(response)
}

const onGetAllProductsSuccess = function (data) {
  console.log('first line inside function')
  console.log(data.products)
  $(() => {
    const theTemplateScript = $('#product-inventory-template').html()
    // Compile the template
    const theTemplate = Handlebars.compile(theTemplateScript)
    // Define our data object
    const context = {
      fields: data.products
    }
    // Pass our data to the template
    const theCompiledHtml = theTemplate(context)
    // Add the compiled html to the page
    $('#table-holder').prepend(theCompiledHtml)
    console.log('last line within function')
  })
}

const onGetAllProductsError = function (response) {
  console.error(response)
}

module.exports = {
  onCreateSuccess,
  onError,
  onSignInSuccess,
  onSignInError,
  onChangePasswordSuccess,
  onChangePasswordError,
  onSignOutSuccess,
  onSignOutError,
  onGetAllProductsSuccess,
  onGetAllProductsError
}
