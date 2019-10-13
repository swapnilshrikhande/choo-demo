// import choo
var choo = require('choo')

// import template
var main = require('./templates/main')

// initialize choo
var app = choo()

//state management
app.use(function(state){
    // initialize state
  state.animals = [
    {type: 'lion', x: 200, y: 100},
    {type: 'crocodile', x: 50, y: 300}
  ];
});

// create a route
app.route('/', main)

// start app
app.mount('div')


