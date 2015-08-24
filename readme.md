# Getting started with Titan Database and Node.js

![Gremlin](http://tinkerpop.incubator.apache.org/images/tinkerpop3-splash.png)

This is a getting started guide for running a [Titan](http://thinkaurelius.github.io/titan) graph database using Node.js and [Gremlin](http://tinkerpop.incubator.apache.org/).

What is Gremlin? A few open source tools that help you interact with graph databases. It allows you to avoid lock-in by switching seamlessly between different graph databases. Neo4j, Titan, OrientDB, and ArangoDB all support it. The Gremlin tools that you probably care about are the query language (the green creature in the picture above) and the HTTP server (called Rexster, that's the yellow dog).

## Run Titan

`git clone https://github.com/oren/titan.git`
`cd titan`
`bin/run`

Runs 3 Docker containers: Titan, ElasticSearch, (Indexing) and Cassandra (Storage). The HTTP server runs on port 8182.

(Note - You need to have docker installed. If you are on Mac you'll need to modify index.js to use the IP you get from  boot2docker or docker-machine.)

## Interact with the Database

`node index.js`

Let's look at the nodes (also called vertices) in our database: `curl http://localhost:8182/graphs/graph/vertices`

```js
{
  version: "2.5.0",
  results: [
    {
    name: "Alice",
    _id: 512,
    _type: "vertex"
    },
    {
    name: "Bob",
    _id: 256,
    _type: "vertex"
    }
  ],
  totalSize: 2,
  queryTime: 66.634585
}
```

And now for the edges: `curl http://localhost:8182/graphs/graph/edges`

```js
{
  version: "2.5.0",
  results: [
    {
      since: "now",
      _id: "ps-74-36d-e8",
      _type: "edge",
      _outV: 256,
      _inV: 512,
      _label: "likes"
    }
  ],
  totalSize: 1,
  queryTime: 179.556075
}
```

This code uses [grex](https://github.com/jbmusso/grex), the [Rexster](https://github.com/tinkerpop/rexster/wiki) client for Node.js. It's a `request` package wrapper that adds a few higher level functions.

The following lines are all that are required to create two vertices and an edge:
```js
var bob = query.var(g.addVertex({ name: 'Bob' }));
var alice = query.var(g.addVertex({ name: 'Alice' }));
query(g.addEdge(bob, alice, 'likes', { since: 'now' }));
```

## Resources

* [Titan docs](http://s3.thinkaurelius.com/docs/titan/0.9.0-M2)
* [grex](https://github.com/jbmusso/grex) - Rexter client for Node.js
* [Rexter documentation](https://github.com/tinkerpop/rexster/wiki)
* [Rexster HTTP endpionts](https://github.com/tinkerpop/rexster/wiki/Basic-REST-API)
* [Docker repository](https://github.com/apobbati/titan-rexster)
* [Gremlin google group](https://groups.google.com/forum/#!forum/gremlin-users)
