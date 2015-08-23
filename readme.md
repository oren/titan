# Titan Database with Node.js

This is a getting started guide for running [Titan](http://thinkaurelius.github.io/titan) graph database using Node.js

## Run Titan

    bin/run

   Runs 3 containers: Titan, ElasticSearch, (Indexing) and Cassandra (Storage).

The following ports are available:

* 8182: HTTP port for REST API
* 8183: RexPro for native access (Binary protocol)

## Interact with the Database

		node index.js

It uses [grex](https://github.com/jbmusso/grex), the [Rexster](https://github.com/tinkerpop/rexster/wiki) client for Node.js. It's a `request` wrapper that addes a few higher level functions.

## Resources

* [HTTP endpionts](https://github.com/tinkerpop/rexster/wiki/Basic-REST-API)
* [Titan docs](http://s3.thinkaurelius.com/docs/titan/0.9.0-M2)
* [Rexter client for Node.js](https://github.com/jbmusso/grex)
* [Rexter documentation](https://github.com/tinkerpop/rexster/wiki)
* [Docker repository](https://github.com/apobbati/titan-rexster)
