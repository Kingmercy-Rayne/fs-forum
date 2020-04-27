const knex = require("knex");

//check for current environment and assign to variable
const environment = process.env.NODE_ENV || "development";

// import knexfile
const knexConfifg = require("../knexfile");

// transform knexConfig from imported object based on current environment
const environmentConfig = knexConfifg[environment];

// create a connection based on knexConfig
const connection = knex(environmentConfig);

module.exports = connection;
