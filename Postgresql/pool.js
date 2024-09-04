const { Pool } = require('pg');

// Configure the connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'rootuser',
  port: 5432,
});

module.exports = pool;  // Correctly export the pool object
