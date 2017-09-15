'use strict'


const userApi = require('./api.js')
const userUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateAccount = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.create(data)
    .then(userUi.onCreateSuccess)
    .catch(userUi.onError)
}
