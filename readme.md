# Titan Database with Node.js

![Gremlin](http://tinkerpop.incubator.apache.org/images/tinkerpop3-splash.png)

This is a getting started guide for running [Titan](http://thinkaurelius.github.io/titan) graph database using Node.js and [Gremlin](http://tinkerpop.incubator.apache.org/).

What is Gremlin? a few open source tools that helps you interact with graph databases. It allows you to avoid lock-in by switching seamlessly between different graph databases. Neo4j, Titan, OrientDB, and ArangoDB all support Gremlin. The Gremlin tools that you probably care about are the query language (the green gremlin) and the HTTP server (called Rexster, that's the yellow dog).

## Run Titan

`git clone https://github.com/oren/titan.git`  
`cd titan`  
`bin/run`

   Runs 3 Docker containers: Titan, ElasticSearch, (Indexing) and Cassandra (Storage). Port 8182 is running the HTTP server.

(Note - You need to have docker installed. If you are on Mac you'll need to modify index.js to use the IP you get from  boot2docker or docker-machine.)

## Interact with the Database

`node index.js`

let's look at the nodes (also called vertices) in our database:


`curl http://localhost:8182/graphs/graph/vertices`

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

`curl http://localhost:8182/graphs/graph/edges`

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

This code uses [grex](https://github.com/jbmusso/grex), the [Rexster](https://github.com/tinkerpop/rexster/wiki) client for Node.js. It's a `request` package wrapper that addes a few higher level functions.

## Resources

* [Titan docs](http://s3.thinkaurelius.com/docs/titan/0.9.0-M2)
* [grex](https://github.com/jbmusso/grex) - Rexter client for Node.js
* [Rexter documentation](https://github.com/tinkerpop/rexster/wiki)
* [Rexster HTTP endpionts](https://github.com/tinkerpop/rexster/wiki/Basic-REST-API)
* [Docker repository](https://github.com/apobbati/titan-rexster)
* [Gremlin google group](https://groups.google.com/forum/#!forum/gremlin-users)
