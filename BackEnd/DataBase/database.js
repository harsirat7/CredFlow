const mySQL = require("mysql2");
const config = require("../config");

const pool = mySQL.createPool({
    host: `${config.database.host}`,
    user: `${config.database.user}`,
    password: `${config.database.password}`,
    database: `${config.database.databaseName}`,
    connectionLimit: 20,
    waitForConnections: true,
    queueLimit: 100,
    multipleStatements: false,
});

pool.getConnection((err, connection) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`Database Connected Successfully : ${connection.threadId}`);
        connection.release();
    }
});

module.exports = pool;