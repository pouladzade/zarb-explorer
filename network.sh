docker run -d -v "$(pwd)"/envoy/envoy.yaml:/etc/envoy/envoy.yaml:ro -p 8090:8090 -p 9901:9901 envoyproxy/envoy:v1.16.2

npm start