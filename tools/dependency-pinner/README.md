# Dependency Pinner

This tool is meant as a one-off tool that pins all dependencies within this project to the version that is in the yarn.lock.
There is no tool out there doing this with yarn (only with npm's package-lock.json files), so we need to build one on our own. As we don't want to maintain or publish this outside of this project we will leave it here as a reference.

## Running the tool

1. On the root level install the dependencies using `yarn`
2. In this directory run `yarn start`
