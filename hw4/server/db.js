const Pool = require("pg").Pool;

const pool = new Pool({
    user: "cosc0221",
    password: "1845352JS",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;