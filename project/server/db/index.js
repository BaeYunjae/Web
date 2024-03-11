const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  // AWS IP
  host: "43.200.181.231",
  // mysql username
  user: "ssafy",
  // mysql password
  password: "ssafy_1234",
  // db name
  database: "order_system",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = { pool };
