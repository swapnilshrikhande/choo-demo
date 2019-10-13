// import choo's template helper
var html = require('choo/html')
var animal = require('./animal')

// export module
module.exports = function (state,emit) {
  // create html template
  return html`
    <div class="container">
      <div class="grass" onclick="${add}">
        <img src="/assets/bg.gif" />
        ${state.animals.map(animal)}
      </div>
    </div>
  `
  
  
  //add function to add an animal to ui
  function add () {
    emit('addAnimal')
  }
}