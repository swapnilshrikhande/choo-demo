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
        ${state.animals.map(animalMap)}
      </div>
    </div>
  `
  
  // map function
  function animalMap (data, index) {
    return animal(remove, data, index)
  }
  
  //add function to add an animal to ui
  function add (event) {
    var data = {};
    data.x = event.offsetX - 20;
    data.y = event.offsetY - 20;
    emit('addAnimal',data)
  }
  
  
  // remove animal from state
  function remove (event) {
    var index = event.target.id
    emit('removeAnimal', index)
    event.stopPropagation()
  }
  
}