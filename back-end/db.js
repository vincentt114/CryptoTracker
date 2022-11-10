const { Pool } = require('pg');

const connectionString = 'pospostgres://pgpcsqbj:0AXTYm2lJ99MAsMOFSAKkURWJjI0xZml@peanut.db.elephantsql.com/pgpcsqbj';
const pool = new Pool({
  connectionString,
});

module.exports = pool;
