# Titan Database with Node.js

## Run

    bin/run

The following ports are available:

* 8182: HTTP port for REST API
* 8183: RexPro for native access (Binary protocol)

## HTTP endpoints

list of all graphs

    curl http://localhost:8182/graphs

list of all vertices

    curl http://localhost:8182/graphs/graph/vertices
