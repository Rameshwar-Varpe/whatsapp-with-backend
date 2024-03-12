const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "whatsapp",
});

exports.getConnection = async () => {
    const connection = await pool.getConnection();
    return connection;
};
