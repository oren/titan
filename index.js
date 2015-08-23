var grex = require('grex');
var options = {
  host: 'localhost',
  port: 8182,
  graph: 'graph'
}
var client = grex.createClient(options);
// Init a couple shortcuts
var gremlin = grex.gremlin;
var g = grex.g;

var query = gremlin();

var alice = g.addVertex({name:'Alice'});
var bob = g.addVertex({name:'Bob'});
query(alice);
query(bob);
g.addEdge(alice, bob, 'knows' , { since: '2014' });

query(g.addVertex({ name: "Carol" }));
query(g.addVertex({ name: "Dave" }));

// 3. Send script for execution, and return a raw response object with a 'results' Array property.
client.execute(query, function(err, response) {
  if (err) {
    return console.error(err);
  }

  console.log('response:', response);
})

// {
//   success: true,
//   results: [ { name: 'Dave', _id: 1024, _type: 'vertex' } ],
//   version: '2.5.0',
//   queryTime: 7478.908961
// }

