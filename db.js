const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // substitua pelo seu usuário do MySQL
  password: '', // substitua pela sua senha do MySQL
  database: 'client_db'
});

module.exports = pool.promise();
