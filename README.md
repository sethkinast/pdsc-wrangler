# Unicorn Wrangler

This utility converts [Pegasus Data Schemas (.pdsc)](https://github.com/linkedin/rest.li/wiki/DATA-Data-Schema-and-Templates) into Javascript models for use with NotTerribleModel.

The resulting models can be used to construct instances that represent a response from a [rest.li](https://github.com/linkedin/rest.li)-compatible API server.

The model template is written using [Dust.js](https://github.com/linkedin/dustjs) and is easily customizable if you would like to transform PDSCs into a different format.

# Setup

    npm install
    npm start
