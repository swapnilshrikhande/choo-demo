// import choo
var choo = require('choo')

// import template
var main = require('./templates/main')

// initialize choo
var app = choo()

//state management
app.use(function(state,emitter){
    // initialize state
  state.animals = [
    {type: 'lion', x: 200, y: 100},
    {type: 'crocodile', x: 50, y: 300}
  ];
  
  //emitter a way to signify change in the state
  // add animal
  emitter.on('addAnimal', function () {
    var obj = {type: 'lion', x: 100, y: 200}
    state.animals.push(obj)
    emitter.emit('render')
  })
  
});

// create a route
app.route('/', main)

// start app
app.mount('div')


