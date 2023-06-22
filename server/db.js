const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Nilbogssafive55%",
  host: "localhost",
  port: 5432,
  database: "locationscout",
});

module.exports = pool;
