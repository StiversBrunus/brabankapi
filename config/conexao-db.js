const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: '54.234.133.225',
    port: 3306,
    user: 'bruno',
    password: 'bcd127',
    database: 'brabank'
})

module.exports = conexao