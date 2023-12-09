#!/bin/bash

# Source: https://github.com/facebook/create-react-app/blob/0a827f69ab0d2ee3871ba9b71350031d8a81b7ae/tasks/local-registry.sh

custom_registry_url=localhost:4873
original_npm_registry_url=`npm get registry`
original_yarn_registry_url=`yarn config get registry`
default_verdaccio_package=verdaccio@^5.26.1

function startLocalRegistry {
  # Start local registry
  tmp_registry_log=`mktemp`
  echo "Verdaccio Registry log file: $tmp_registry_log"
  
  storage_dir="$(dirname $1)/storage"
  echo "Cleaning storage dir ($storage_dir).."
  rm -rf $storage_dir

  nohup npx ${VERDACCIO_PACKAGE:-$default_verdaccio_package} -c $1 &>$tmp_registry_log &
  verdaccio_pid="$!"
  
  # Wait for Verdaccio to boot
  echo "Waiting for local Registry to start"
  grep -q 'http address' <(tail -f $tmp_registry_log)

  # Set registry to local registry
  npm set registry "http://$custom_registry_url"
  yarn config set registry "http://$custom_registry_url"

  # Append dummy token for auth, NPM will remove any duplicates for us
  echo "//${custom_registry_url%%/}/:_authToken=dummy" >> ~/.npmrc
}

function stopLocalRegistry {
  # Restore the original NPM and Yarn registry URLs and stop Verdaccio
  npm set registry "$original_npm_registry_url"
  yarn config set registry "$original_yarn_registry_url"
  kill $verdaccio_pid
}
