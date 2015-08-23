var grex = require('grex');
var options = {
  host: 'localhost',
  port: 8182
}
var client = grex.createClient(options);
// Init a couple shortcuts
var gremlin = grex.gremlin;
var g = grex.g;

// 1. Initialize a Gremlin object to work with
// var query = gremlin(g.v(1)); // query.script === 'g.v(1)'

// 2. Initialize a Gremlin object to work with
// var gremlin = client.gremlin();

// var v1 = gremlin.g.addVertex({fname:'Karen', lname:'Hill', uname:'khillca', _id: 100}, 'vB');
// var v2 = gremlin.g.addVertex({fname:'Kevin', lname:'Hill', uname:'kivo360', _id: 101}, 'vC');
// gremlin.g.addEdge(v1, v2, 'family' , { weight: '0.75f' });
// var helpme = gremlin.g.v(12).out();

// 3. Send script for execution, and return a raw response object with a 'results' Array property.
client.execute(query, function(err, response) {
  if (err) {
    return console.error(err);
  }

  console.log('response:', response);
})
