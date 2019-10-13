// import choo
var choo = require('choo')

// import template
var main = require('./templates/main')

// initialize choo
var app = choo()

//state management
app.use(function(state){
  state.animals = {type:'lion',x:13,y:15};
});

// create a route
app.route('/', main)

// start app
app.mount('div')


