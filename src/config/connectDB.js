const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'tri',
    password: 'tri',
    database: 'tri',
});

export default connection;


//优 选 源 码 库  w w w. y x y m k .n e t