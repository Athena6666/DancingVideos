const mysql = require('mysql2')

const pool = mysql.createPool({
  host: '198.18.0.1',
  user: 'root',
  password: '!Ydy13962036853',
  database: 'DancingVideos',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

const promisePool = pool.promise() //转换为promise版本，方便在async/await语法中使用
module.exports = promisePool //导出连接池，其他文件可以直接require('../config/db')使用
