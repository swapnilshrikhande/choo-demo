// import choo's template helper
var html = require('choo/html')

// export module
module.exports = function (remove,animal,index) {
  var type = animal.type
  var x = animal.x
  var y = animal.y

  // create html template
  return html`
    <img src="/assets/${type}.gif" style="left: ${x}px; top: ${y}px;" id="${index}" onclick="${remove}">
  `
}