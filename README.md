# zarb-explorer

Zarb explorer which is build using React js. It is used to dispay the transactions details,block details getting from the zarb blocchain. Still in development phase.

### Steps to run zarb-explorer

`docker run -d -v "$(pwd)"/envoy/envoy.yaml:/etc/envoy/envoy.yaml:ro -p 8090:8090 -p 9901:9901 envoyproxy/envoy:v1.16.2`

`npm install`

`npm start`

Make sure you have docker installed.Envoy acts a proxy between grpc client and server.
