'use strict'

const app = require('../store.js')


const create = function(data){
  console.log("passing thought api js")
  console.log(app.host)
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data
  })
}

module.exports = {
  create
}
