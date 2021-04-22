#!/usr/bin/env bash

if ! [ -x "$(command -v docker)" ] ; then
    echo "docker command is not available, please install docker"
    echo "Install docker: https://store.docker.com/search?offering=community&type=edition"
    exit 1
fi

# check if sudo is required to run docker
if [ "$(groups | grep -c docker)" -gt "0" ]; then
    echo "Envoy will run at port 8090 and 9901 (see envoy-config.yml)"
    docker run -d -v "$(pwd)"/envoy/envoy.yaml:/etc/envoy/envoy.yaml:ro \
    -p 8090:8090 -p 9901:9901 envoyproxy/envoy:v1.16.2
else
    echo "you are not in the docker group, running with sudo"
    echo "Envoy will run at port 8090 and 9901 (see envoy-config.yml)"
    sudo docker run -d -v "$(pwd)"/envoy/envoy.yaml:/etc/envoy/envoy.yaml:ro \
    -p 8090:8090 -p 9901:9901 envoyproxy/envoy:v1.16.2
fi

DIR="./node_modules"
if [ -d "$DIR" ]; then
  # Take action if $DIR exists. #
  echo "node modules exist in ${DIR}..."
  echo "npm start"
  npm start
else
  ###  Control will jump here if $DIR does NOT exists ###
  echo "npm install"
  npm install 
  echo "npm start"
  npm start
fi

#  npm install 
#  npm start