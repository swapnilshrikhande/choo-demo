// import choo's template helper
var html = require('choo/html')
var animal = require('./animal')

// export module
module.exports = function (state) {
  // create html template
  return html`
    <div class="container">
      <div class="grass">
        <img src="/assets/bg.gif" />
        ${state.animals.map(animal)}
      </div>
    </div>
  `
}