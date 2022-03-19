'use strict';
const sqlConfig = {
    server: 'localhost',
    port:1433,
    database: 'STUDENT_RECORD',
    user: 'sa',
    password: 'Passw0rd2020',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

module.exports = sqlConfig