const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.USER,
  password: process.env.password,
  host: "localhost",
  port: 5432,
  database: "employee",
});

module.exports = pool;
