const {user,host,database,password,port} = require('./config')
const Pool =  require('pg').Pool
const pool = new Pool({
    user: user,
    host: host,
    database: database,
    password: password,
    port: port
  })

  module.exports = pool


  // const pool = new Pool({
  //   user: 'me',
  //   host: 'localhost',
  //   database: 'api',
  //   password: 'password',
  //   port: 5432,
  // })