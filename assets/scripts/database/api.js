'use strict'

const app = require('../store.js')


const create = function(data){
  return $.ajax({
    url: app.host +'/users',
    method: 'POST',
    data
  })
}

module.exports = {
  create
}
