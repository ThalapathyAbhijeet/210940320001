const mysql = require("mysql");
const Promise = require ("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "project1",
  };

  const All= async () => {
    const connection = mysql.createConnection(dbinfo);
  
    await connection.connectAsync();
  
    let sql = `SELECT * FROM MESSAGES`;

    const list = await connection.queryAsync(sql, []);
  
    await connection.endAsync();
    return list; 
  };
  
async function addmessage() {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql = `insert into MESSAGES (text) values(?)`;
    await connection.queryAsync(sql, [MESSAGES.text]);
    await connection.endAsync();
};

async function connectionCheck(){
   const connection=mysql.createConnection(dbinfo)
   await connection.connectAsync();
 
   console.log("Connection Success!!");

   await connection.endAsync();
}
connectionCheck();
const MESSAGES = { text: "hello" };
addmessage(MESSAGES);
module.exports={
    addmessage
};