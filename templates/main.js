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
      <div class="controls">
      <ul class="filters">
        <li><a href="/">all</a></li>
        <li><a href="/#filter/crocodile">crocodiles</a></li>
        <li><a href="/#filter/koala">koalas</a></li>
        <li><a href="/#filter/lion">lions</a></li>
        <li><a href="/#filter/tiger">tigers</a></li>
        <li><a href="/#filter/walrus">walruses</a></li>
      </ul>
    </div>
    </div>
  `
  
  // map function
  function animalMap (data, index) {
    
    var type = state.params.type

    if (type && type !== data.type) {
      return; // nothing
    } else {
      return animal(remove, data, index)
    }
    
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