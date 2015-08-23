var grex = require('grex');
var options = {
  host: 'localhost',
  port: 8182,
  graph: 'graph'
}
var client = grex.createClient(options);
// shortcuts
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

// Send script for execution
client.execute(query, function(err, response) {
  if (err) {
    return console.error(err);
  }

  console.log('response:', response);
})
