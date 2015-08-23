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

var bob = query.var(g.addVertex({ name: 'Bob' }));
var alice = query.var(g.addVertex({ name: 'Alice' }));
query(g.addEdge(bob, alice, 'likes', { since: 'now' }));

// Send script for execution
client.execute(query, function(err, response) {
  if (err) {
    return console.error(err);
  }

  console.log('response:', response);
})
