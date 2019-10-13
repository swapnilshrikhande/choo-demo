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
  emitter.on('addAnimal', function (data) {
    var animals = ['crocodile', 'koala', 'lion', 'tiger', 'walrus']
    var type = Math.floor(Math.random() * 5)
    var obj = {type: animals[type], x: data.x, y: data.y}
    state.animals.push(obj)
    emitter.emit('render')
  })
  
  // remove animal
  emitter.on('removeAnimal', function (index) {
    state.animals.splice(index, 1)
    emitter.emit('render')
  })
  
});

// create a route
app.route('/', main)
app.route('/filter/:type', main)

// start app
app.mount('div')


